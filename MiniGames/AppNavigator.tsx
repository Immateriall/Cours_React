import { createAppContainer, createStackNavigator } from "react-navigation";

import DifferencesScreen from "./screens/DifferencesScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import OtherScreen from "./screens/OtherScreen";
import SignUpScreen from "./screens/SignUpScreen";

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Other: OtherScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Differences: DifferencesScreen
  },
  {
    initialRouteName: "Login"
  }
);

export const AppContainer = createAppContainer(AppNavigator);
