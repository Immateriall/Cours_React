import React, { Component } from "react";
import {
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";

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
            <View style={{ flex: 1 }}>
              <Image
                style={styles.image}
                key={gameInfo.routeScreen}
                source={{ uri: gameInfo.imageUri }}
              />
              <Button
                title={gameInfo.gameName}
                onPress={this.onButtonPress.bind(this, gameInfo.routeScreen)}
              />
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
    height: 500
  },
  image: {
    width: 400,
    height: 400
  }
});
