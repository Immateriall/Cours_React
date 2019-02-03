import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";

export class SquareShape extends React.Component {
  render() {
    return <View style={styles.SquareShapeView} />;
  }
}

const styles = StyleSheet.create({
  SquareShapeView: {
    width: 55,
    height: 55,
    backgroundColor: "#90caf9"
  }
});
