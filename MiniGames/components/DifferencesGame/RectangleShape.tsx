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
  
        width: 37 * 2,
        height: 37,
        backgroundColor: '#FFC107', 
        }
})