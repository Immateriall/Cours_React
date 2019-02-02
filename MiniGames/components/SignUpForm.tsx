import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { authApi, User } from "../api/AuthApi";
import { setUserAction } from "../store/actions";
import { Spacer } from "./Spacer";

type SignUpFormValues = {
  email: string;
  password: string;
  pseudo: string;
};

type SignUpFormProps = {
  setUserAction: typeof setUserAction;
};

type SignUpFormState = {
  signUpFailed: boolean;
  errorMsg: string;
};

class SignUpForm extends React.Component<SignUpFormProps, SignUpFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      signUpFailed: false,
      errorMsg: ""
    };
  }

  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "", pseudo: "" }}
        onSubmit={(values: SignUpFormValues) => this.onSignUp(values)}
      >
        {props => (
          <View style={styles.container}>
            <Spacer size="medium" />
            <TextInput
              placeholder="Pseudo"
              onChangeText={props.handleChange("pseudo")}
              onBlur={props.handleBlur("pseudo")}
              value={props.values.pseudo}
              style={styles.textInput}
            />
            <Spacer size="medium" />
            <TextInput
              placeholder="Email"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
            />
            <Spacer size="medium" />
            <TextInput
              placeholder="Mot de passe"
              secureTextEntry={true}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              value={props.values.password}
            />
            <Spacer size="medium" />
            {this.state.signUpFailed && (
              <Text style={styles.error}>Error: {this.state.errorMsg}</Text>
            )}
            <Button onPress={props.handleSubmit} title="S'inscrire" />
          </View>
        )}
      </Formik>
    );
  }

  private async onSignUp(values: SignUpFormValues) {
    try {
      const user = await authApi.signUp(
        values.email,
        values.password,
        values.pseudo
      );
      if (user) this.props.setUserAction(user);
    } catch (error) {
      this.setState({ signUpFailed: true, errorMsg: error.message });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  error: {
    color: "red"
  },
  textInput: {
    // borderColor: "black",
    // borderRadius: 10,
    // borderWidth: 1,
    // width: "50%"
  }
});

const SignUpFormConnected = connect(
  null,
  dispatch => {
    return {
      setUserAction: (user: User) => dispatch(setUserAction(user))
    };
  }
)(SignUpForm);

export { SignUpFormConnected as SignUpForm };
