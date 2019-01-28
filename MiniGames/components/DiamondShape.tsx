import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import React from "react";

export class DiamondShape extends React.Component {
    render(){
        return (
        <View style={styles.diamondShapeView} />
        );
    }
}

const styles = StyleSheet.create({
    diamondShapeView:{
        width: 50,
        height: 50,
        marginTop: 10,
        backgroundColor: 'pink',
        transform: [
          {rotate: '45deg'}
        ]    
      }
})