import React, { Component } from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import { Carousel } from "../components/ui/Carousel";

export default class MainMenuScreen extends React.Component {
  render() {
    const gameInfos = [
      {
        imageUri: "http://www.logologo.com/logos/globe-compass-logo.jpg",
        routeScreen: "VibrationsGame",
        gameName: "Vibrations"
      },
      {
        imageUri: "http://www.logologo.com/logos/horse-logo2.jpg",
        routeScreen: "SimonGame",
        gameName: "Simon"
      },
      {
        imageUri: "http://www.logologo.com/logos/horse-logo2.jpg",
        routeScreen: "DifferencesGame",
        gameName: "7 Différences"
      }
    ];
    return <Carousel navigation={this.props.navigation} data={gameInfos} />;
  }
}