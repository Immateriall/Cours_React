import { difference } from "lodash";
import React, { Component, ReactElement } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

import { CircleShape } from "./CircleShape";
import { DiamondShape } from "./DiamondShape";
import { RectangleShape } from "./RectangleShape";
import { SquareShape } from "./SquareShape";
import { TriangleShape } from "./TriangleShape";
import { Spacer } from "../common/Spacer";

type DifferencesGameProps = {
  onGameOver: (score: number) => void;
};

type DifferencesGameState = {
  score: number;
  //Tableau pour connaître les paires sélectionnées
  isLineSelected: boolean[];
  //Variable pour connaître le nombre de différences trouvées
  nbDiff: number;
  //Variable pour connaître le nombre de manches
  round: number;
};

//Nombre de figures à afficher
const numberShapes = 7;

//Nombre de manches à jouer
const maxRound = 5;

//Dimensions de l'écran
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

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

export class DifferencesGame extends React.Component<
  DifferencesGameProps,
  DifferencesGameState
> {
  //Tableau contenant les paires de figures de la manche
  private scene: Pair[] = [];

  //Variable pour connître le nombre de différences dans la manche
  private maxDiff: number = 0;

  constructor(props: any) {
    super(props);
    this.state = {
      score: 0,
      isLineSelected: new Array(numberShapes).fill(false),
      nbDiff: 0,
      round: 1
    };
  }

  render() {
    if (this.scene.length == 0) {
      this.scene = this.createScene();
    }

    return (
      <View style={styles.container}>
        <View style={styles.default}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {" "}
            Score: {this.state.score}
          </Text>
          <View style={{ width: 150, height: 50 }} />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {" "}
            Manche: {this.state.round} / {maxRound}
          </Text>
        </View>
        {this.renderScene()}
      </View>
    );
  }

  //Charge une nouvelle manche ou termine la partie
  private reload() {
    if (this.state.round != maxRound) {
      this.setState({
        isLineSelected: new Array(numberShapes).fill(false),
        round: this.state.round + 1
      });

      this.scene = [];
    } else {
      this.props.onGameOver(this.state.score);
    }
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

      if (isCorrect) {
        this.maxDiff += 1;
      }
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

  //Change le score et vérifie si la manche est terminée en fonction de la paire sélectionnée
  private setScore(diff: number, id: number) {
    let isLineSelected = this.state.isLineSelected;
    isLineSelected[id] = true;
    let nbDiff = this.state.nbDiff;
    let score = this.state.score;
    score = diff ? (score += 10) : (score -= 10);
    if (diff) {
      nbDiff += 1;
    }
    this.setState({
      isLineSelected: isLineSelected,
      score,
      nbDiff
    });

    if (nbDiff == this.maxDiff) {
      this.reload();
    }
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
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 40,
    paddingHorizontal: 10
  },

  wrong: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#d73232",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 40,
    paddingHorizontal: 10
  },

  default: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 40,
    paddingHorizontal: 10
  }
});
