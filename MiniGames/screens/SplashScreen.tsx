import React from "react";
import { SplashScreenView } from "../components/ui/SplashScreenView";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <SplashScreenView navigation={this.props.navigation}/>
    );
  }
}
