import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

import { User } from "../api/AuthApi";
import { RootState } from "../store/RootState";
import { getUser } from "../store/selectors";

type UserProfileProps = {
  user: User | null;
};

class UserProfile extends React.Component<UserProfileProps> {
  render() {
    if (!this.props.user) return null;

    return (
      <View style={{ backgroundColor: "pink" }}>
        <Text>INFOS USER</Text>
        {this.props.user.pseudo && (
          <Text>Pseudo : {this.props.user.pseudo}</Text>
        )}
        {this.props.user.email && <Text>Email : {this.props.user.email}</Text>}
      </View>
    );
  }
}

const UserProfileConnected = connect((state: RootState) => {
  return {
    user: getUser(state)
  };
})(UserProfile);

export { UserProfileConnected as UserProfile };
