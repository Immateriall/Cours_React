import { FontAwesome } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
        <TouchableOpacity
          style={{ alignSelf: "flex-start", marginLeft: 20, marginTop: 20 }}
          onPress={this.onUserPress.bind(this)}
        >
          <FontAwesome name="user" size={32} color="black" />
        </TouchableOpacity>
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
                source={gameInfo.imageUri}
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

  private onUserPress() {
    this.props.navigation.navigate("UserProfile");
  }

  private onButtonPress(routeScreen: string) {
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
