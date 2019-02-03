import { difference } from "lodash";
import React, { Component, ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CircleShape } from "../components/CircleShape";
import { DiamondShape } from "../components/DiamondShape";
import { RectangleShape } from "../components/RectangleShape";
import { SquareShape } from "../components/SquareShape";
import { TriangleShape } from "../components/TriangleShape";

type DifferencesGameState = {
  score: number;
  //Tableau pour connaître les paires sélectionnées
  isLineSelected: boolean[];
};

//Nombre de figures à afficher
const numberShapes = 7;

type Pair = {
  isCorrect: boolean;
  shape1: JSX.Element;
  shape2: JSX.Element;
  id: number;
};

const shapes = [
  <SquareShape />,
  <RectangleShape />,
  <TriangleShape />,
  <CircleShape />,
  <DiamondShape />
];

export class DifferencesGame extends React.Component<{}, DifferencesGameState> {
  private scene: Pair[] = [];

  constructor(props: any) {
    super(props);
    this.state = {
      score: 0,
      isLineSelected: new Array(numberShapes).fill(false)
    };
  }

  render() {
    if (this.scene.length == 0) {
      this.scene = this.createScene();
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}> Score: {this.state.score}</Text>
        {this.renderScene()}
      </View>
    );
  }

  private renderScene() {
    return this.scene.map(pair => {
      if (pair.isCorrect) {
        return (
          <TouchableOpacity
            onPress={() => this.setScore(1, pair.id)}
            style={
              this.state.isLineSelected[pair.id]
                ? styles.correct
                : styles.default
            }
            disabled={this.state.isLineSelected[pair.id]}
            key={"Space" + pair.id}
          >
            {pair.shape1}
            <View style={{ width: 150, height: 50 }} />
            {pair.shape2}
          </TouchableOpacity>
        );
      } else {
        return (
          <TouchableOpacity
            onPress={() => this.setScore(0, pair.id)}
            style={
              this.state.isLineSelected[pair.id] ? styles.wrong : styles.default
            }
            disabled={this.state.isLineSelected[pair.id]}
            key={"Space" + pair.id}
          >
            {pair.shape1}
            <View style={{ width: 150, height: 50 }} />
            {pair.shape1}
          </TouchableOpacity>
        );
      }
    });
  }

  //Créer une scène avec des figures
  private createScene() {
    let scene: Pair[] = [];
    for (let index = 0; index < numberShapes; index++) {
      //On choisit aléatoirement 1 figure parmis 5
      const randomShape = this.getRandomShape(null);
      //Une chance sur deux qu'il y est une différence sur la paire
      const isCorrect = Math.random() >= 0.5;

      const pair: Pair = {
        id: index,
        isCorrect,
        shape1: randomShape,
        shape2: this.getRandomShape(randomShape)
      };

      scene.push(pair);
    }
    return scene;
  }

  //Retourne une figure aléatoire différente de celle passée en paramètre
  private getRandomShape(shape: any) {
    const shapesWithoutShape = difference(shapes, [shape]);
    return shapesWithoutShape[
      Math.floor(Math.random() * shapesWithoutShape.length)
    ];
  }

  //Change le score en fonction de la paire sélectionnée
  private setScore(diff: number, id: number) {
    let isLineSelected = this.state.isLineSelected;
    isLineSelected[id] = true;
    let score = this.state.score;
    score = diff ? (score += 10) : (score -= 10);

    window.console.log("before = " + this.state.isLineSelected);

    this.setState({
      isLineSelected: isLineSelected,
      score
    });

    window.console.log("after = " + this.state.isLineSelected);
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
    backgroundColor: "lightgreen",
    borderStyle: "solid",
    borderColor: "green",
    borderWidth: 1
  },

  wrong: {
    flex: 1,
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "red",
    borderWidth: 1
  },

  default: {
    flex: 1,
    flexDirection: "row"
  }
});
