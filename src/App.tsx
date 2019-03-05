import React from "react";
import { createAppContainer } from "react-navigation";
import { useScreens } from "react-native-screens";

import NavigationService from "./navigators/NavigationService";
import BottomTab from "./navigators/BottomTab";

// Uncomment to use react-native-screens
// useScreens();

const AppContainer = createAppContainer(BottomTab);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef =>
          NavigationService.setTopLevelNavigator(navigatorRef)
        }
      />
    );
  }
}
