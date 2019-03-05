import React from "react";
import { Surface } from "react-native-paper";
import { ProfileBanner, PostFeed } from "../common";
import { IUser, IPost } from "../../api/PlaceholderTypes";
import { api } from "../../api/PlaceholderApi";
import { View } from "react-native";
import NavigationService from "../../navigators/NavigationService";
import { NavigationRouteId, NavigationParameterKey } from "../../navigators";
import { NavigationScreenProps } from "react-navigation";

interface IState {
  profile?: IUser;
  profileFeed: IPost[];
}

type HomeProfileProps = NavigationScreenProps;

export class HomeProfile extends React.Component<HomeProfileProps, IState> {
  constructor(props: HomeProfileProps) {
    super(props);
    this.state = { profileFeed: [] };
  }

  public componentDidMount() {
    this.fetchProfileAndPosts();
  }

  public render() {
    if (!this.state.profile) return null;

    return (
      <View style={{ flex: 1 }}>
        <PostFeed
          data={this.state.profileFeed}
          headerComponent={<ProfileBanner profile={this.state.profile} />}
          onPostPress={this.handlePostPress}
        />
      </View>
    );
  }

  public fetchProfileAndPosts = async () => {
    try {
      const userId = this.props.navigation.getParam(
        NavigationParameterKey.UserId
      );
      const profile = await api.fetchUser(userId);

      if (profile) {
        this.setState({ profile });
      }

      const profileFeed = await api.fetchPostsForUserId(userId);

      if (profileFeed) {
        this.setState({ profileFeed });
      }
    } catch (error) {}
  };

  private handlePostPress = (postId: number) => {
    NavigationService.push(NavigationRouteId.HomeStackDetail, {
      [NavigationParameterKey.PostId]: postId
    });
  };
}
