import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class GameOverScreen extends React.Component {
  render() {
    const score = this.props.navigation.getParam("score", 0);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>End of Game</Text>
        <Text style={styles.text}>Your Score is : </Text>
        <Text style={styles.text}>{score}</Text>
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
