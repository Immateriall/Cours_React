import { difference, isEqual } from "lodash";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import { SimonButton } from "./SimonButton";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const colorPositions = ["top", "right", "bottom", "left"];

type SimonGameProps = {
  onGameOver: (score: number) => void;
};

type SimonGameState = {
  canPlay: boolean;
  sequenceColors: string[];
  currentColor: string;
};

export class SimonGame extends React.Component<SimonGameProps, SimonGameState> {
  constructor(props: any) {
    super(props);
    const color = this.getRandomColor("");
    this.state = {
      canPlay: false,
      sequenceColors: [color],
      currentColor: "",
    };
  }

  private shouldLaunchSequence: boolean = true;
  private pressedColors: string[] = [];

  private getRandomColor(withoutColor: string) {
    const colorsWithoutColor = difference(colorPositions, [withoutColor]);
    return colorsWithoutColor[
      Math.floor(Math.random() * colorsWithoutColor.length)
    ];
  }

  private renderColor(color: string) {
    return (
      <React.Fragment>
        <SimonButton
          position={"top"}
          enabled={color === "top"}
          onPress={this.onButtonPress.bind(this, "top")}
        />
        <SimonButton
          position={"right"}
          enabled={color === "right"}
          onPress={this.onButtonPress.bind(this, "right")}
        />
        <SimonButton
          position={"bottom"}
          enabled={color === "bottom"}
          onPress={this.onButtonPress.bind(this, "bottom")}
        />
        <SimonButton
          position={"left"}
          enabled={color === "left"}
          onPress={this.onButtonPress.bind(this, "left")}
        />
      </React.Fragment>
    );
  }

  render() {
    if (this.shouldLaunchSequence) {
      let i = 1;
      this.state.sequenceColors.map(color => {
        setTimeout(() => {
          this.setState({ currentColor: color });
        }, 1000 * i);
        i++;
      });
      setTimeout(() => {
        this.setState({ currentColor: "", canPlay: true });
      }, 1000 * i);

      this.shouldLaunchSequence = false;
    }

    return (
      <View
        style={
          this.state.canPlay ? styles.containerPlay : styles.containerSequence
        }
      >
        <Text style={{ alignSelf: "center" }}>
          Number of colors : {this.state.sequenceColors.length}
        </Text>
        {this.renderColor(this.state.currentColor)}
      </View>
    );
  }

  private onButtonPress(color: string) {
    this.pressedColors.push(color);

    this.setState({
      currentColor: color
    });

    if (
      !isEqual(
        this.pressedColors,
        this.state.sequenceColors.slice(0, this.pressedColors.length)
      )
    )
      this.props.onGameOver(this.state.sequenceColors.length - 1);

    if (isEqual(this.pressedColors, this.state.sequenceColors)) {
      this.pressedColors = [];
      let sequenceColors = this.state.sequenceColors;
      const newColor = this.getRandomColor(
        sequenceColors[sequenceColors.length - 1]
      );
      sequenceColors.push(newColor);
      this.setState({
        canPlay: false,
        sequenceColors
      });
      this.shouldLaunchSequence = true;
    }
  }
}

const styles = StyleSheet.create({
  containerPlay: {
    height: "100%",
    margin: 10,
    backgroundColor: "white"
  },
  containerSequence: {
    height: "100%",
    margin: 10,
    backgroundColor: "lightgrey"
  }
});
