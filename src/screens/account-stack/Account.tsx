import React from "react";
import { ProfileBanner, PostFeed } from "../common";
import { IUser, IPost } from "../../api/PlaceholderTypes";
import { api } from "../../api/PlaceholderApi";
import { View } from "react-native";
import NavigationService from "../../navigators/NavigationService";
import { NavigationRouteId, NavigationParameterKey } from "../../navigators";
import { MAKE_NETWORK_REQUESTS } from "../../config";
import PushScreen from "../common/PushScreen";

interface IState {
  profile?: IUser;
  profileFeed: IPost[];
}

const userId = 1;

class Account extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { profileFeed: [] };
  }

  public componentDidMount() {
    if (MAKE_NETWORK_REQUESTS) {
      this.fetchProfileAndPosts();
    }
  }

  public render() {
    if (!MAKE_NETWORK_REQUESTS) {
      return (
        <PushScreen
          buttonText={"Push to detail"}
          text={"Account"}
          navigationStackKey={NavigationRouteId.BottomTabAccount}
          detailPageRouteId={NavigationRouteId.AccountStackDetail}
        />
      );
    }

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
    NavigationService.push(NavigationRouteId.AccountStackDetail, {
      [NavigationParameterKey.PostId]: postId
    });
  };
}

export default Account;
