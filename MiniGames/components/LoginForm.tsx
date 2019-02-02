import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { authApi, User } from "../api/AuthApi";
import { setUserAction } from "../store/actions";
import { Spacer } from "./Spacer";

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  setUserAction: typeof setUserAction;
  onLoginSuccess: () => void;
};

type LoginFormState = {
  loginFailed: boolean;
  errorMsg: string;
};

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginFailed: false,
      errorMsg: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values: LoginFormValues) => this.onLogin(values)}
        >
          {props => (
            <View>
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

              {this.state.loginFailed && (
                <Text style={styles.error}>Error: {this.state.errorMsg}</Text>
              )}
              <Button onPress={props.handleSubmit} title="Connexion" />
            </View>
          )}
        </Formik>
      </React.Fragment>
    );
  }

  private async onLogin(values: LoginFormValues) {
    try {
      const user = await authApi.login(values.email, values.password);
      console.log("LOGGED USER: ", user);
      if (user) {
        this.props.setUserAction(user);
        this.props.onLoginSuccess();
      }
    } catch (error) {
      this.setState({ loginFailed: true, errorMsg: error.message });
    }
  }
}

const styles = StyleSheet.create({
  error: {
    color: "red"
  }
});

const LoginFormConnected = connect(
  null,
  dispatch => {
    return {
      setUserAction: (user: User) => dispatch(setUserAction(user))
    };
  }
)(LoginForm);

export { LoginFormConnected as LoginForm };
