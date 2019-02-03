import React, { Component } from 'react';

import { Carousel } from '../components/ui/Carousel';

export default class MainMenuScreen extends React.Component {
  render() {
    const gameInfos = [
      {
        imageUri: require("../assets/vibrations_logo.png"),
        routeScreen: "VibrationsGame",
        gameName: "Vibrations"
      },
      {
        imageUri: require("../assets/simon_logo.png"),
        routeScreen: "SimonGame",
        gameName: "Simon"
      },
      {
        imageUri: require("../assets/differences_logo.png"),
        routeScreen: "DifferencesGame",
        gameName: "7 Différences"
      }
    ];
    return <Carousel navigation={this.props.navigation} data={gameInfos} />;
  }
}