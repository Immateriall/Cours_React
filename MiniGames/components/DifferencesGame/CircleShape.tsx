import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import React from "react";

export class CircleShape extends React.Component {
  render() {
    return <View style={styles.CircleShapeView} />;
  }
}

const styles = StyleSheet.create({
  CircleShapeView: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#a5d6a7"
  }
});
