import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import React from "react";
import { SquareShape } from "../components/SquareShape";
import { RectangleShape } from "../components/RectangleShape";
import { TriangleShape } from "../components/TriangleShape";
import { CircleShape } from "../components/CircleShape";
import { DiamondShape } from "./DiamondShape";


export class DifferencesGame extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {this.createScene()}
            </View>
            );
        }

    private createScene(){
        var numberShapes = 6;
        var scene = [];     

        while (numberShapes != 0){
            var rand = 1 + Math.floor(Math.random() * 4)
            switch(rand){
                case 1:
                    scene.push(<SquareShape/>)
                    break
                case 2:
                    scene.push(<RectangleShape/>)
                    break
                case 3:
                    scene.push(<TriangleShape/>)
                    break
                case 4:
                    scene.push(<CircleShape/>)
                    break    
                case 5:
                    scene.push(<DiamondShape/>)
                    break
            }
            numberShapes -= 1
        }
        return (scene);
    }
    }

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  });