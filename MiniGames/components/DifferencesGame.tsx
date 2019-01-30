import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import React, { Component, ReactElement } from "react";
import { SquareShape } from "../components/SquareShape";
import { RectangleShape } from "../components/RectangleShape";
import { TriangleShape } from "../components/TriangleShape";
import { CircleShape } from "../components/CircleShape";
import { DiamondShape } from "../components/DiamondShape";
import { DifferencesForm } from "../components/DifferencesForm";


export class DifferencesGame extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {this.createScene()}
            </View>
            );
        }
    //Créer une scène avec des figures
    private createScene(){
        //Nombre de figures à afficher
        var numberShapes = 7;
        //Tableau contenant les paires de figures
        var scene = [];
        //Nombre de différences
        var differences = 0;     

        //Tant que la scène n'est pas entièrement créée
        while (numberShapes != 0){
            //On choisit aléatoirement 1 figure parmis 5
            var rand = 1 + Math.floor(Math.random() * 5)
            //Une chance sur deux qu'il y est une différence sur la paire
            var randDiff = Math.floor(Math.random() * 2)
            
            if (randDiff){
                differences += 1;
            }
            switch(rand){
                case 1:
                    scene.push(this.makePair(numberShapes, <SquareShape/>, randDiff))
                    break
                case 2:
                    scene.push(this.makePair(numberShapes, <RectangleShape/>, randDiff))
                    break
                case 3:
                    scene.push(this.makePair(numberShapes, <TriangleShape/>, randDiff))
                    break
                case 4:
                    scene.push(this.makePair(numberShapes, <CircleShape/>, randDiff))
                    break    
                case 5:
                    scene.push(this.makePair(numberShapes, <DiamondShape/>, randDiff))
                    break
            }
            numberShapes -= 1
        }
        console.log("Bonne réponse : " + differences);
        scene.push(<DifferencesForm key={"DifferencesForm"}/>)
        return (scene);
    }

    //Créer une paire de figure
    private makePair(numberShapes: number, shape, randDiff: number){
        var view;

        if (randDiff != 0){
            view = <View key={"View" + numberShapes} style={{flex: 1, flexDirection: 'row'}}>
                {shape}
                <View key={"test3" + numberShapes} style={{width: 150, height: 50,}}/>
                {this.getRandomShape(shape)}
          </View>
        }
        else{
            view = <View key={"View" + numberShapes} style={{flex: 1, flexDirection: 'row'}}>
                {shape}
                <View key={"test3" + numberShapes} style={{width: 150, height: 50,}}/>
                {shape}
          </View>
        }
        return (view);
     }

     //Retourne une figure aléatoire différente de celle passée en paramètre
    private getRandomShape(shape){
        var shapes = [<SquareShape/>, <RectangleShape/>, <TriangleShape/>, <CircleShape/>, <DiamondShape/>];
        var rand = Math.floor(Math.random() * 5)
        while (shapes[rand].type == shape.type){
            rand = Math.floor(Math.random() * 5)
        }
        return (shapes[rand]);
    }
    }

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
  });