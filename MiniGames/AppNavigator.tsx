import { createStackNavigator, createAppContainer } from "react-navigation";
import MainScreen from "./screens/MainScreen";
import OtherScreen from "./screens/OtherScreen";

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Other: OtherScreen
  },
  {
    initialRouteName: "Main"
  }
);

export const AppContainer = createAppContainer(AppNavigator);
