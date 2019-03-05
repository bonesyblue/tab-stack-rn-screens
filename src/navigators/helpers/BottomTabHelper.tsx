import React from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationRouteId } from "../NavigationRouteId";
import {
  NavigationScreenConfigProps,
  NavigationTabScreenOptions
} from "react-navigation";
import NavigationService from "../NavigationService";

export const getIconForRouteName = (routeName: string, focused: boolean) => {
  const tabIconSize = 32;
  const iconColor = "#000000";

  let iconName = "help";

  switch (routeName) {
    case NavigationRouteId.BottomTabHome:
      iconName = focused ? "home" : "home-outline";
      break;
    case NavigationRouteId.BottomTabAccount:
      iconName = focused ? "account" : "account-outline";
      break;
    default:
      return null;
  }

  return (
    <MaterialCommunityIcon
      name={iconName}
      color={iconColor}
      size={tabIconSize}
    />
  );
};

export const bottomTabNavigationOptions = ({
  navigation
}: NavigationScreenConfigProps): NavigationTabScreenOptions => {
  return {
    tabBarOnPress: () => {
      return NavigationService.navigate(navigation.state.routeName);
    }
  };
};
