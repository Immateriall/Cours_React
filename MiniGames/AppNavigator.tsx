import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import DifferencesScreen from "./screens/DifferencesScreen";
import GameOverScreen from "./screens/GameOverScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SimonGameScreen from "./screens/SimonGameScreen";
import SplashScreen from "./screens/SplashScreen";

const AppStack = createStackNavigator({
  Main: MainScreen,
  Differences: DifferencesScreen,
  GameOver: GameOverScreen,
  SimonGame: SimonGameScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Splash"
  }
);

export const AppContainer = createAppContainer(AppNavigator);
