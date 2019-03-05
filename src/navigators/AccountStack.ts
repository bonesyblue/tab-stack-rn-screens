import {
  NavigationRouteConfigMap,
  StackNavigatorConfig,
  createStackNavigator
} from "react-navigation";
import { NavigationRouteId } from "./NavigationRouteId";

import Account from "../screens/account-stack/Account";
import { AccountDetail } from "../screens/account-stack/AccountDetail";

const authStackRouteConfigMap: NavigationRouteConfigMap = {
  [NavigationRouteId.AccountStackAccount]: Account,
  [NavigationRouteId.AccountStackDetail]: AccountDetail
};

const authStackNavigatorConfig: StackNavigatorConfig = {
  initialRouteName: NavigationRouteId.AccountStackAccount
};

export default createStackNavigator(
  authStackRouteConfigMap,
  authStackNavigatorConfig
);
