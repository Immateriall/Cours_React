import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

import DifferencesScreen from "./screens/DifferencesScreen";
import GameOverScreen from "./screens/GameOverScreen";
import LoginScreen from "./screens/LoginScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SimonGameScreen from "./screens/SimonGameScreen";
import SplashScreen from "./screens/SplashScreen";
import VibrationsGameScreen from "./screens/VibrationsGameScreen";
import MainMenuScreen from "./screens/MainMenuScreen";

const AppStack = createStackNavigator({
  Main: MainMenuScreen,
  UserProfile: UserProfileScreen,
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
