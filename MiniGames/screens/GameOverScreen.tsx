import React from "react";

import { GameOverView } from "../components/ui/GameOverView";

export default class GameOverScreen extends React.Component {
  render() {
    const score = this.props.navigation.getParam("score", 0);
    const gameName = this.props.navigation.getParam("gameName", "default");

    return <GameOverView score={score} gameName={gameName} />;
  }
}
