import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";

export class DiamondShape extends React.Component {
  render() {
    return <View style={styles.diamondShapeView} />;
  }
}

const styles = StyleSheet.create({
  diamondShapeView: {
    width: 45,
    height: 45,
    backgroundColor: "pink",
    transform: [{ rotate: "45deg" }]
  }
});
