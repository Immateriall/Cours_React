import React from "react";

import { User, authApi } from "../../api/AuthApi";
import { setUserAction } from "../../store/actions";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

type SplashScreenViewProps = {
  user?: User;
  navigation: any;
  setUserAction: typeof setUserAction;
};

class SplashScreenView extends React.Component<SplashScreenViewProps> {
  componentWillMount() {
    authApi.getUser((user: any) => this.onUserChange(user));
  }

  private onUserChange(user: any) {
    if (user) {
      this.props.setUserAction(user);
      this.props.navigation.navigate("App");
    } else this.props.navigation.navigate("Auth");
  }

  render() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const SplashScreenViewConnected = connect(
  null,
  dispatch => {
    return {
      setUserAction: (user: User) => dispatch(setUserAction(user))
    };
  }
)(SplashScreenView);

export { SplashScreenViewConnected as SplashScreenView };
