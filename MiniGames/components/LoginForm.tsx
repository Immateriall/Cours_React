import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { authApi, User } from "../api/AuthApi";
import { setUserAction } from "../store/actions";
import { UserProfile } from "./UserProfile";

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  setUserAction: typeof setUserAction;
};

type LoginFormState = {
  loginSuccess: boolean;
};

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginSuccess: false
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
              <Button onPress={props.handleSubmit} title="Connexion" />
            </View>
          )}
        </Formik>
        {this.state.loginSuccess && <UserProfile />}
      </React.Fragment>
    );
  }

  private async onLogin(values: LoginFormValues) {
    const user = await authApi.login(values.email, values.password);
    if (user) {
      this.props.setUserAction(user);
      this.setState({ loginSuccess: true });
    }
  }
}

const LoginFormConnected = connect(
  null,
  dispatch => {
    return {
      setUserAction: (user: User) => dispatch(setUserAction(user))
    };
  }
)(LoginForm);

export { LoginFormConnected as LoginForm };
