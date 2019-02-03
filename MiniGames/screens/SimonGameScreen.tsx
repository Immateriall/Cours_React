import React from "react";
import { SimonGame } from "../components/SimonGame/SimonGame";
import { number } from "prop-types";

export default class SimonGameScreen extends React.Component {
  render() {
    return (
      <SimonGame
        onGameOver={(score: number) => this.onGameOver(score)}
      />
    );
  }

  private onGameOver(score: number) {
    this.props.navigation.navigate("GameOver", { score: score, gameName: "simon" });
  }
}
