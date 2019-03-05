import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams,
  NavigationNavigateAction,
  StackActions
} from "react-navigation";

export default class NavigationService {
  private static rootNavigator: NavigationContainerComponent | null = null;

  public static setTopLevelNavigator(
    navigatorRef: NavigationContainerComponent | null
  ) {
    this.rootNavigator = navigatorRef;
  }

  public static navigate(
    routeName: string,
    params?: NavigationParams,
    key?: string,
    action?: NavigationNavigateAction
  ) {
    if (this.rootNavigator == null) {
      return;
    }

    this.rootNavigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
        key,
        action
      })
    );
  }

  public static push(
    routeName: string,
    params?: NavigationParams,
    key?: string,
    action?: NavigationNavigateAction
  ) {
    if (this.rootNavigator == null) {
      return;
    }

    this.rootNavigator.dispatch(
      StackActions.push({
        routeName,
        params,
        action
      })
    );
  }

  public static goBack() {
    if (this.rootNavigator == null) {
      return;
    }

    this.rootNavigator.dispatch(NavigationActions.back());
  }
}
