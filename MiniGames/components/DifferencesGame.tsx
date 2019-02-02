import {
  Button,
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React, { Component, ReactElement } from "react";
import { SquareShape } from "../components/SquareShape";
import { RectangleShape } from "../components/RectangleShape";
import { TriangleShape } from "../components/TriangleShape";
import { CircleShape } from "../components/CircleShape";
import { DiamondShape } from "../components/DiamondShape";
import { Spacer } from "../components/Spacer";

type DifferencesGameState = {
  //Nombre de figures à afficher
  numberShapes: number;
  score: number;
  //Tableau pour connaître les paires sélectionnées
  isSelected: any;
  //Tableau contenant les paires de figures
  scene: any;
  isCreated: boolean;
};
export class DifferencesGame extends React.Component<{}, DifferencesGameState> {
  constructor(props: any) {
    super(props);
    this.state = {
      numberShapes: 7,
      score: 0,
      isSelected: this.initArray(),
      scene: [],
      isCreated: false
    };
  }

  render() {
    if (!this.state.isCreated) {
      this.setState({
        scene: this.createScene()
      });
    }
    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}> Score: {this.state.score}</Text>
        {this.state.scene}
      </View>
    );
  }

  //On initialise toutes les lignes à false
  private initArray() {
    var row = 0;
    var numberShapes = 7;
    var array = [];

    while (row != numberShapes) {
      array.push(false);
      row += 1;
    }
    window.console.log("test = " + array[3]);
    return (array);
  }

  //Créer une scène avec des figures
  private createScene() {
    var row = 0;
    var scene = [];

    //Tant que la scène n'est pas entièrement créée
    while (row != this.state.numberShapes) {
      //On choisit aléatoirement 1 figure parmis 5
      var rand = 1 + Math.floor(Math.random() * 5);
      //Une chance sur deux qu'il y est une différence sur la paire
      var randDiff = Math.floor(Math.random() * 2);

      switch (rand) {
        case 1:
          scene.push(this.makePair(row, <SquareShape />, randDiff));
          break;
        case 2:
          scene.push(this.makePair(row, <RectangleShape />, randDiff));
          break;
        case 3:
          scene.push(this.makePair(row, <TriangleShape />, randDiff));
          break;
        case 4:
          scene.push(this.makePair(row, <CircleShape />, randDiff));
          break;
        case 5:
          scene.push(this.makePair(row, <DiamondShape />, randDiff));
          break;
      }
      row += 1;
    }
    this.setState({
        isCreated: true
      });
    return scene;
  }

  //Créer une paire de figure
  private makePair(row: number, shape: any, randDiff: number) {
    var pair;
    window.console.log("row = " + row + "tab[row] = " + this.state.isSelected[row]);
    //Si il doit y avoir une différence dans la paire
    if (randDiff) {
      pair = (
        <TouchableOpacity
          onPress={() => this.setScore(1, row)}
          style={this.state.isSelected[row] ? styles.correct : styles.correct}
          disabled={this.state.isSelected[row]}
        >
          {shape}
          <View key={"Space" + row} style={{ width: 150, height: 50 }} />
          {this.getRandomShape(shape)}
        </TouchableOpacity>
      );
    } else {
      pair = (
        <TouchableOpacity
          onPress={() => this.setScore(0, row)}
          style={this.state.isSelected[row] ? styles.wrong : styles.correct}
          disabled={this.state.isSelected[row]}
        >
          {shape}
          <View key={"Space" + row} style={{ width: 150, height: 50 }} />
          {shape}
        </TouchableOpacity>
      );
    }
    return pair;
  }

  //Retourne une figure aléatoire différente de celle passée en paramètre
  private getRandomShape(shape: any) {
    var shapes = [
      <SquareShape />,
      <RectangleShape />,
      <TriangleShape />,
      <CircleShape />,
      <DiamondShape />
    ];
    var rand = Math.floor(Math.random() * 5);
    while (shapes[rand].type == shape.type) {
      rand = Math.floor(Math.random() * 5);
    }
    return shapes[rand];
  }

  //Change le score en fonction de la paire sélectionnée
  private setScore(diff: number, row: number) {
    if (diff) {
      this.setState({
        score: this.state.score + 10
      });
    } else {
      this.setState({
        score: this.state.score - 10
      });
    }
    window.console.log("before = " + this.state.isSelected)
    this.state.isSelected[row] = true;
    window.console.log("after = " + this.state.isSelected)  
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },

  correct: {
    flex: 1,
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "green"
  },

  wrong: {
    flex: 1,
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "red"
  },

  default: {
    flex: 1,
    flexDirection: "row"
  }
});
