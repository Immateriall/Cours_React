import React from "react";
import { Button, Text, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { authApi, User } from "../../api/AuthApi";
import { setUserAction } from "../../store/actions";
import { RootState } from "../../store/RootState";
import { getUser } from "../../store/selectors";

type UserProfileProps = {
  user: User;
  setUserAction: typeof setUserAction;
};

type UserProfileState = {
  test: boolean;
};

class UserProfile extends React.Component<UserProfileProps, UserProfileState> {
  constructor(props: any) {
    super(props);
    this.state = {
      test: false
    };
  }

  render() {
    if (!this.props.user) return null;

    const { pseudo, email, profileImageUri, scores } = this.props.user;

    return (
      <View style={{ backgroundColor: "pink" }}>
        <Text>INFOS USER</Text>
        {pseudo && <Text>Pseudo : {pseudo}</Text>}
        {email && <Text>Email : {email}</Text>}
        {profileImageUri && <Image source={{uri: profileImageUri}} style={styles.image}></Image>}
        {scores && this.renderScores()}
        <Button title={"TEST SCORE"} onPress={this.onTestScore.bind(this)} />
      </View>
    );
  }

  private renderScores() {
    const { scores } = this.props.user;

    let scoresText = [];
    for (const key in scores) {
      scoresText.push(
        <View>
          <Text>
            {key} : {scores[key].score}
          </Text>
        </View>
      );
    }
    return <View>{scoresText}</View>;
  }

  private async onTestScore() {
    const newUserData: User = {
      ...this.props.user,
      scores: {
        game1: {
          score: 42
        },
        game2: {
          score: 2
        },
        game3: {
          score: 67
        }
      }
    };
    try {
      const newUser = await authApi.updateUser(newUserData);
      if (newUser && this.props.setUserAction) {
        this.props.setUserAction(newUser);
        this.setState({ test: true });
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  }
}

const UserProfileConnected = connect(
  (state: RootState) => {
    return {
      user: getUser(state)
    };
  },
  dispatch => {
    return {
      setUserAction: (user: User) => dispatch(setUserAction(user))
    };
  }
)(UserProfile);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginBottom: 20,
    alignSelf: "center"
  }
});

export { UserProfileConnected as UserProfile };
