import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./screens/MainScreen";
import OtherScreen from "./screens/OtherScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DifferencesScreen from "./screens/DifferencesScreen";

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Other: OtherScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    Differences: DifferencesScreen
  },
  {
    initialRouteName: "Main"
  }
);

export const AppContainer = createAppContainer(AppNavigator);
