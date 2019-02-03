import React from "react";

import { UserProfile } from "../components/ui/UserProfile";

export default class UserProfileScreen extends React.Component {
  render() {
    return <UserProfile navigation={this.props.navigation} />;
  }
}
