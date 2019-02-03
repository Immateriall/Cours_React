import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { SignUpForm } from "../components/ui/SignUpForm";
import { LoginForm } from "../components/ui/LoginForm";
import { UserProfile } from "../components/ui/UserProfile";

export default class MainScreen extends React.Component {
  render() {
    return (
      // <SignUpForm />
      // <LoginForm />
      <View style={styles.container}>
        <Text>Best view ever</Text>
        <Text>MAIN MENU</Text>
        <UserProfile />
        {/* <Button title={"Connexion"} onPress={this.onButtonPress.bind(this)} /> */}
      </View>
    );
  }

  private onButtonPress() {
    console.log("BUTTON PRESS");
    this.props.navigation.navigate("Login");
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
