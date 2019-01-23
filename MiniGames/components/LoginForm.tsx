import { Button, TextInput, View, Text } from 'react-native';
import React from "react";
import { Formik } from 'formik';

export class LoginForm extends React.Component {
    render() {
        return (
            <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {props => (
              <View>
                <TextInput
                  placeholder="Email"
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                />
                <TextInput
                  placeholder="Mot de passe"
                  secureTextEntry={true}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                />
                <Button onPress={props.handleSubmit} title="Connexion" />
              </View>
            )}
          </Formik>
            );
        }
}