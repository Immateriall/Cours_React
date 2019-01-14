import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default class MainScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Best view ever</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Button title={"Go to 2"} onPress={this.onButtonPress.bind(this)} />
      </View>
    );
  }

  private onButtonPress() {
    console.log("BUTTON PRESS");
    this.props.navigation.navigate("Other");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f",
    alignItems: "center",
    justifyContent: "center"
  }
});
