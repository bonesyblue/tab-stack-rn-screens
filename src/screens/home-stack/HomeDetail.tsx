import React from "react";
import Detail from "../common/Detail";
import { NavigationScreenProps } from "react-navigation";
import NavigationService from "../../navigators/NavigationService";
import { NavigationRouteId, NavigationParameterKey } from "../../navigators";
import { MAKE_NETWORK_REQUESTS } from "../../config";
import PushScreen from "../common/PushScreen";

export const HomeDetail: React.StatelessComponent<NavigationScreenProps> = ({
  navigation
}) => {
  if (!MAKE_NETWORK_REQUESTS) {
    return (
      <PushScreen
        buttonText={"Push to profile"}
        text={"Detail"}
        navigationStackKey={NavigationRouteId.BottomTabHome}
        detailPageRouteId={NavigationRouteId.HomeStackProfile}
      />
    );
  }
  return <Detail onAuthorPress={pushToAuthor} navigation={navigation} />;
};

const pushToAuthor = (userId: number) =>
  NavigationService.push(NavigationRouteId.HomeStackProfile, {
    [NavigationParameterKey.UserId]: userId
  });
