import moment, { Moment } from "moment";
import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Vibration,
  View,
  Text,
  TouchableOpacity
} from "react-native";
type VibrationsGameProps = {
  onGameOver: (score: number) => void;
};
type VibrationsGameState = {
  hasVibrated: boolean;
};
export class VibrationsGame extends React.Component<
  VibrationsGameProps,
  VibrationsGameState
> {
  private startTime: Moment | null = null;
  constructor(props: any) {
    super(props);
    this.state = {
      hasVibrated: false
    };
  }
  private startVibration() {
    this.startTime = moment();
    Vibration.vibrate(1000, false);
    this.setState({
      hasVibrated: true
    });
  }
  private stopVibration() {
    Vibration.cancel();
  }
  componentDidMount() {
    const randomDelay = Math.floor(Math.random() * 5000) + 2000;
    setTimeout(this.startVibration.bind(this), randomDelay);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.hasVibrated && (
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress.bind(this)}
          >
            <Text style={styles.buttonText}>!!!</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
  private onPress() {
    if (this.startTime) {
      const stopTime = moment();
      const diff = stopTime.diff(this.startTime);
      this.stopVibration();
      this.props.onGameOver(diff);
    }
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
    height: "100%",
    justifyContent: "center"
  },
  button: {
    height: "30%",
    width: "60%",
    backgroundColor: "red",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white"
  }
});