import { Button, TextInput, View, Text } from 'react-native';
import React from "react";
import { Formik } from 'formik';

export class DifferencesForm extends React.Component {
    render() {
        return (
            <Formik
            initialValues={{ differences: ''}}
            onSubmit={values => console.log(values)}
          >
            {props => (
              <View key={"DifferencesFormView"}>
                <TextInput
                  placeholder="Nombre de différences"
                  onChangeText={props.handleChange('differences')}
                  onBlur={props.handleBlur('differences')}
                  value={props.values.differences}
                  key={"DifferencesTextInput"}/>
                <Button onPress={props.handleSubmit} title="Valider" key={"SubmitButton"} />
              </View>
            )}
          </Formik>
            );
        }
}