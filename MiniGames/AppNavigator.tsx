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
import VibrationsGameScreen from "./screens/VibrationGameScreen";

const AppStack = createStackNavigator({
  Main: MainScreen,
  DifferencesGame: DifferencesScreen,
  VibrationsGame: VibrationsGameScreen,
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
