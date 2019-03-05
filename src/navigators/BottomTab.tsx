import {
  createBottomTabNavigator,
  NavigationRouteConfigMap,
  NavigationScreenConfig,
  NavigationBottomTabScreenOptions,
  BottomTabNavigatorConfig
} from "react-navigation";
import { NavigationRouteId } from "./NavigationRouteId";
import { getIconForRouteName } from "./helpers";

import HomeStack from "./HomeStack";
import AccountStack from "./AccountStack";

const bottomTabRouteConfigMap: NavigationRouteConfigMap = {
  [NavigationRouteId.BottomTabHome]: HomeStack,
  [NavigationRouteId.BottomTabAccount]: AccountStack
};

const bottomTabNavigatorOptions: NavigationScreenConfig<
  NavigationBottomTabScreenOptions
> = ({ navigation }) => {
  return {
    tabBarIcon: iconOptions => {
      const { focused } = iconOptions;
      return getIconForRouteName(navigation.state.routeName, focused);
    }
  };
};

const bottomTabNavigatorConfig: BottomTabNavigatorConfig = {
  initialRouteName: NavigationRouteId.BottomTabHome,
  defaultNavigationOptions: bottomTabNavigatorOptions,
  tabBarOptions: { showLabel: false }
};

export default createBottomTabNavigator(
  bottomTabRouteConfigMap,
  bottomTabNavigatorConfig
);
