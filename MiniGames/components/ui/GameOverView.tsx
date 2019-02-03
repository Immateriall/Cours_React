import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import { authApi, User } from "../../api/AuthApi";
import { setUserAction } from "../../store/actions";
import { RootState } from "../../store/RootState";
import { getUser } from "../../store/selectors";

type GameOverViewProps = {
  score: number;
  gameName: string;
  user: User;
  setUserAction: typeof setUserAction;
};
class GameOverView extends React.Component<GameOverViewProps> {
  private scoreUpdated: boolean = false;
  private async updateScore(gameName: string, score: number) {
    let scores = this.props.user.scores;
    const newUserData = {
      ...this.props.user,
      scores: {
        ...scores,
        [gameName]: { score }
      }
    };
    const newUser = await authApi.updateUser(newUserData);
    if (newUser && this.props.setUserAction) {
      this.props.setUserAction(newUser);
    }
  }

  render() {
    if (this.props.user && !this.scoreUpdated) {
      this.updateScore(this.props.gameName, this.props.score);
      this.scoreUpdated = true;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>End of Game</Text>
        <Text style={styles.text}>Your Score is : </Text>
        <Text style={styles.text}>{this.props.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white"
  },
  text: {
    fontSize: 50
  }
});

const GameOverViewConnected = connect(
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
)(GameOverView);

export { GameOverViewConnected as GameOverView };
