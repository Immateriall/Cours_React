import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import React from "react";

export class TriangleShape extends React.Component {
    render(){
        return (
            <View style={styles.TriangleShapeView}/>
        );
    }
}

const styles = StyleSheet.create({
    TriangleShapeView: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 30,
        borderBottomWidth: 60,
        borderLeftWidth: 30,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red',
        borderLeftColor: 'transparent',
    }
})