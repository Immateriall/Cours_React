import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { authApi, User } from '../../api/AuthApi';
import { setUserAction } from '../../store/actions';
import { RootState } from '../../store/RootState';
import { getUser } from '../../store/selectors';
import { Spacer } from '../common/Spacer';

type UserProfileProps = {
  user: User;
  setUserAction: typeof setUserAction;
  navigation: any;
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

    const { pseudo, email, scores } = this.props.user;
    return (
      <View style={{ alignItems: "center" }}>
        <Spacer size="medium" />
        <Text>Profil utilisateur</Text>
        <Spacer size="medium" />
        {pseudo && <Text>Pseudo : {pseudo}</Text>}
        {email && <Text>Email : {email}</Text>}
        <Spacer size="medium" />
        {this.renderImage()}
        {scores && this.renderScores()}
        <Spacer size="medium" />
        <Button title={"Se déconnecter"} onPress={this.onSignOut.bind(this)} />
      </View>
    );
  }

  private renderImage() {
    if (
      this.props.user.profileImageUri &&
      this.props.user.profileImageUri.length > 0
    )
      return (
        <Image
          source={{ uri: this.props.user.profileImageUri }}
          style={styles.image}
        />
      );
    return null;
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

  private async onSignOut() {
    await authApi.signOut();
    this.props.navigation.navigate("Splash");
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
