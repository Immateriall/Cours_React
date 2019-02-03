import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";

export class RectangleShape extends React.Component {
  render() {
    return <View style={styles.RectangleShapeView} />;
  }
}

const styles = StyleSheet.create({
  RectangleShapeView: {
    width: 30 * 2,
    height: 37,
    backgroundColor: "#ffe082"
  }
});
