import React from "react";
import SimpleScreen from "../common/SimpleScreen";
import { bottomTabNavigationOptions } from "../../navigators/helpers";

class Likes extends React.Component {
  public static navigationOptions = bottomTabNavigationOptions;

  public render() {
    return <SimpleScreen text={"Likes"} />;
  }
}

export default Likes;
