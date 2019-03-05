import React from "react";
import { NavigationRouteId, NavigationParameterKey } from "../../navigators";
import { api } from "../../api/PlaceholderApi";
import { IPost } from "../../api/PlaceholderTypes";
import { PostFeed } from "../common";
import NavigationService from "../../navigators/NavigationService";
import {
  NavigationScreenConfigProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { MAKE_NETWORK_REQUESTS } from "../../config";
import PushScreen from "../common/PushScreen";

interface IState {
  posts: IPost[];
}

class Home extends React.Component<{}, IState> {
  public static navigationOptions = ({
    navigation
  }: NavigationScreenConfigProps): NavigationStackScreenOptions => {
    return {
      title: "Home"
    };
  };

  constructor(props: {}) {
    super(props);
    this.state = { posts: [] };
  }

  public componentDidMount() {
    if (MAKE_NETWORK_REQUESTS) {
      this.handleFetchingPosts();
    }
  }

  public render() {
    if (!MAKE_NETWORK_REQUESTS) {
      return (
        <PushScreen
          buttonText={"Push to detail"}
          text={"Home"}
          navigationStackKey={NavigationRouteId.BottomTabHome}
          detailPageRouteId={NavigationRouteId.HomeStackDetail}
        />
      );
    }
    return (
      <PostFeed data={this.state.posts} onPostPress={this.handlePostPress} />
    );
  }

  private handleFetchingPosts = async () => {
    try {
      const posts = (await api.fetchPosts()) as IPost[];

      if (posts) {
        this.setState({ posts });
      }
    } catch (error) {
      console.log(
        `Error encountered in handleFetchingPosts()\n${JSON.stringify(error)}`
      );
    }
  };

  private handlePostPress = (postId: number) => {
    NavigationService.push(NavigationRouteId.HomeStackDetail, {
      [NavigationParameterKey.PostId]: postId
    });
  };
}

export default Home;
