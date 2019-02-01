import React from "react";
import { StyleSheet, View } from "react-native";

type SpacerProps = {
  size?: "small" | "medium" | "huge";
};

export class Spacer extends React.Component<SpacerProps> {
  render() {
    return <View style={styles[this.props.size || "small"]} />;
  }
}

const defaultHeight = 10;

const styles = StyleSheet.create({
  small: {
    height: defaultHeight,
    width: "100%"
  },
  medium: {
    height: defaultHeight * 2,
    width: "100%"
  },
  huge: {
    height: defaultHeight * 3,
    width: "100%"
  }
});
