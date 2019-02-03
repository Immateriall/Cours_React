import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";
import { DifferencesGame } from "../components/DifferencesGame/DifferencesGame";

export default class DifferencesScreen extends React.Component {
  render() {
    return (
      <DifferencesGame onGameOver={(score: number) => this.onGameOver(score)} />
    );
  }

  private onGameOver(score: number) {
    this.props.navigation.navigate("GameOver", { score: score });
  }
}
