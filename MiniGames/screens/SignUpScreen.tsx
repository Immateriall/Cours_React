import { Button, TextInput, View, Text } from 'react-native';
import React from "react";
import { Formik } from 'formik';
import { SignUpForm } from '../components/SignUpForm';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <SignUpForm></SignUpForm>
    );
  }
}