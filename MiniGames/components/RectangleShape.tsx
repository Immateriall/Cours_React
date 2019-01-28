import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import React from "react";

export class RectangleShape extends React.Component {
    render(){
        return (
            <View style={styles.RectangleShapeView}/>
        );
    }
}

const styles = StyleSheet.create({
    RectangleShapeView: {
  
        width: 40 * 2,
        height: 40,
        backgroundColor: '#FFC107'  
        }
})