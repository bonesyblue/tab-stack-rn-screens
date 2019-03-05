import React from "react";
import Detail from "../common/Detail";
import { NavigationScreenProps } from "react-navigation";
import NavigationService from "../../navigators/NavigationService";
import { NavigationRouteId, NavigationParameterKey } from "../../navigators";

export const HomeDetail: React.StatelessComponent<NavigationScreenProps> = ({
  navigation
}) => {
  return <Detail onAuthorPress={pushToAuthor} navigation={navigation} />;
};

const pushToAuthor = (userId: number) =>
  NavigationService.push(NavigationRouteId.HomeStackProfile, {
    [NavigationParameterKey.UserId]: userId
  });
