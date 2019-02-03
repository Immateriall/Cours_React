import React, { Component } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Spacer } from "../common/Spacer";
type GameInfos = {
  imageUri: string;
  routeScreen: string;
  gameName: string;
};
type CarouselProps = {
  navigation: any;
  data: GameInfos[];
};
export class Carousel extends React.Component<CarouselProps> {
  render() {
    return (
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {this.props.data.map(gameInfo => (
            <View style={styles.gameView} key={gameInfo.gameName}>
              <Text style={styles.title}>{gameInfo.gameName}</Text>
              <Spacer size="medium" />
              <Image
                style={styles.image}
                key={gameInfo.routeScreen}
                source={{ uri: gameInfo.imageUri }}
              />
              <Spacer size="medium" />
              <View style={styles.button}>
                <Button
                  title={"Jouer"}
                  onPress={this.onButtonPress.bind(this, gameInfo.routeScreen)}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
  private onButtonPress(routeScreen: string) {
    console.log("BUTTON PRESS");
    this.props.navigation.navigate(routeScreen);
  }
}
const styles = StyleSheet.create({
  scrollContainer: {
    height: "100%"
  },
  gameView: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 30
  },
  image: {
    width: 400,
    height: 400
  },
  button: {
    width: "50%",
    alignSelf: "center"
  }
});
