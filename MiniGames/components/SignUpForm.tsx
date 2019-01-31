import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";

import { authApi } from "../api/AuthApi";

type SignUpFormValues = {
  email: string;
  password: string;
  pseudo: string;
};

export class SignUpForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "", pseudo: "" }}
        onSubmit={(values: SignUpFormValues) => this.onSignUp(values)}
      >
        {props => (
          <View>
            <TextInput
              placeholder="Pseudo"
              onChangeText={props.handleChange("pseudo")}
              onBlur={props.handleBlur("pseudo")}
              value={props.values.pseudo}
            />
            <TextInput
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
            />
            <TextInput
              placeholder="Mot de passe"
              secureTextEntry={true}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              value={props.values.password}
            />
            <Button onPress={props.handleSubmit} title="S'inscrire" />
          </View>
        )}
      </Formik>
    );
  }

  private async onSignUp(values: SignUpFormValues) {
    const user = await authApi.signUp(
      values.email,
      values.password,
      values.pseudo
    );
    if (user) {
      // TODO
      // this.props.setUserAction(user);
      // this.setState({ loginSuccess: true });
    }
    // await this.fbService.signUp(values.email, values.password, values.pseudo);
  }
}
