import { createAppContainer, createStackNavigator } from 'react-navigation';

import DifferencesScreen from './screens/DifferencesScreen';
import GameOverScreen from './screens/GameOverScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import OtherScreen from './screens/OtherScreen';
import SignUpScreen from './screens/SignUpScreen';
import SimonGameScreen from './screens/SimonGameScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Other: OtherScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Differences: DifferencesScreen,
    SimonGame: SimonGameScreen,
    GameOver: GameOverScreen
  },
  {
    initialRouteName: "Login"
  }
);

export const AppContainer = createAppContainer(AppNavigator);
