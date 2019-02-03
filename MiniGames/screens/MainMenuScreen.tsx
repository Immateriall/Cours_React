import React, { Component } from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import { Carousel } from "../components/Carousel";

export default class MainMenuScreen extends React.Component {
  render() {
    const gameInfos = [
      {
        imageUri: "http://www.logologo.com/logos/globe-compass-logo.jpg",
        routeScreen: "Login",
        gameName: "GAME ON"
      },
      {
        imageUri: "http://www.logologo.com/logos/horse-logo2.jpg",
        routeScreen: "SignUp",
        gameName: "game there"
      },
      {
        imageUri: "http://www.logologo.com/logos/horse-logo2.jpg",
        routeScreen: "Main",
        gameName: "game here"
      }
    ];
    return <Carousel navigation={this.props.navigation} data={gameInfos} />;
  }
}