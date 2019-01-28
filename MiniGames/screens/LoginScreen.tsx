import { Button, TextInput, View, Text } from 'react-native';
import React from "react";
import { Formik } from 'formik';
import { LoginForm } from '../components/LoginForm';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Connexion</Text>
        <LoginForm></LoginForm>
        <Text>Pas encore de compte ?</Text>
        <Button title={"Inscriprion"} onPress={this.onButtonPress.bind(this)} />
      </View>
    );
  }

  private onButtonPress() {
    console.log("BUTTON PRESS : Inscription");
    this.props.navigation.navigate("Differences");
  }
}