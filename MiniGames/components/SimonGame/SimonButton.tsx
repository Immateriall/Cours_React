import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

type SimonButtonProps = {
  enabled: boolean;
  position: "top" | "right" | "bottom" | "left";
  style?: any;
  onPress?: () => void;
};

export class SimonButton extends React.Component<SimonButtonProps> {
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.enabled
            ? styles[this.props.position + "ButtonEnabled"]
            : styles[this.props.position + "ButtonDisabled"]
        }
        onPress={() => {
          if (this.props.onPress) this.props.onPress();
        }}
      />
    );
  }
}

const button: ViewStyle = {
  height: 100,
  width: 100,
  position: "absolute",
  borderRadius: 30,
  borderColor: "black",
  borderWidth: 1
};

const disabledButton: ViewStyle = {
  borderColor: "black",
  borderWidth: 1
};

const topButton: ViewStyle = {
  ...button,
  alignSelf: "center",
  top: 100
};

const rightButton: ViewStyle = {
  ...button,
  alignSelf: "flex-end",
  top: 250
};

const bottomButton: ViewStyle = {
  ...button,
  alignSelf: "center",
  top: 400
};

const leftButton: ViewStyle = {
  ...button,
  alignSelf: "flex-start",
  top: 250
};

const styles = StyleSheet.create({
  topButtonEnabled: {
    ...topButton,
    backgroundColor: "#d32f2f"
  },
  topButtonDisabled: {
    ...topButton,
    ...disabledButton,
    backgroundColor: "#ef9a9a",
  },
  rightButtonEnabled: {
    ...rightButton,
    backgroundColor: "#1976d2"
  },
  rightButtonDisabled: {
    ...rightButton,
    ...disabledButton,
    backgroundColor: "#90caf9",
  },
  bottomButtonEnabled: {
    ...bottomButton,
    backgroundColor: "#388e3c"
  },
  bottomButtonDisabled: {
    ...bottomButton,
    ...disabledButton,
    backgroundColor: "#a5d6a7",
  },
  leftButtonEnabled: {
    ...leftButton,
    backgroundColor: "#ffa000"
  },
  leftButtonDisabled: {
    ...leftButton,
    ...disabledButton,
    backgroundColor: "#ffe082",
  }
});
