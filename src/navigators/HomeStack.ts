import {
  NavigationRouteConfigMap,
  StackNavigatorConfig,
  createStackNavigator
} from "react-navigation";
import { NavigationRouteId } from "./NavigationRouteId";
import Home from "../screens/home-stack/Home";
import Detail from "../screens/common/Detail";
import { HomeDetail } from "../screens/home-stack/HomeDetail";
import Account from "../screens/account-stack/Account";
import { HomeProfile } from "../screens/home-stack/HomeProfile";

const authStackRouteConfigMap: NavigationRouteConfigMap = {
  [NavigationRouteId.HomeStackHome]: Home,
  [NavigationRouteId.HomeStackDetail]: HomeDetail,
  [NavigationRouteId.HomeStackProfile]: HomeProfile
};

const authStackNavigatorConfig: StackNavigatorConfig = {
  initialRouteName: NavigationRouteId.HomeStackHome
};

export default createStackNavigator(
  authStackRouteConfigMap,
  authStackNavigatorConfig
);
