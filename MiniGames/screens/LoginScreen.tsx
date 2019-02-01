import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { LoginForm } from "../components/LoginForm";
import { Spacer } from "../components/Spacer";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Connexion</Text>
        <LoginForm onLoginSuccess={this.onLoginSuccess.bind(this)} />
        <Spacer size="huge" />
        <Text>Pas encore de compte ?</Text>
        <Spacer size="medium" />
        <Button title={"Inscription"} onPress={this.onButtonPress.bind(this)} />
      </View>
    );
  }

  private onLoginSuccess() {
    this.props.navigation.navigate("Main");
  }

  private onButtonPress() {
    this.props.navigation.navigate("SignUp");
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
