import React from "react";

import { SignUpForm } from "../components/ui/SignUpForm";

export default class SignUpScreen extends React.Component {
  render() {
    return <SignUpForm onSignUpSuccess={this.onSignUpSuccess.bind(this)}/>;
  }

  private onSignUpSuccess() {
    this.props.navigation.navigate("Main")
  }
}
