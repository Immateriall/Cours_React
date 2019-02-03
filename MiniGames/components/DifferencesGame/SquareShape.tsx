import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import React from "react";

export class SquareShape extends React.Component {
    render(){
        return (
            <View style={styles.SquareShapeView}/>
        );
    }
}

const styles = StyleSheet.create({
    SquareShapeView: {
      width: 60,
      height: 60,
      backgroundColor: '#00BCD4'
    }
})