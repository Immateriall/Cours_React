import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Vibration, Button } from "react-native";
import Moment from 'react-moment';
import moment from "moment";

var RANDOMISER = Math.floor(Math.random() * (5000 - 0 + 1)) + 0;
var PATTERN = [RANDOMISER, 500, 1000];
var a = moment('2016-01-01');
var CURRENTDATE = new Date();
var  CURRENTSTAMP =  moment(CURRENTDATE).format("ss");
export class ReflexesGame extends React.Component {
  constructor() {
    super()
    this.state = {
       myText: 'My Original Text'
    }
 }

  StartVibrationFunction = () => {
    Vibration.vibrate(PATTERN, false);
  };

  StopVibrationFunction = () => {
    Vibration.cancel();
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ margin: 10 }}>
          <TouchableOpacity
          >
            <Text></Text>
          </TouchableOpacity>

          {this.state.showMsg ? <Text>Hello!!</Text> : null}
          <Button
            title=" Start Vibration "
            onPress={this.StartVibrationFunction}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  }
});
