import React from "react";
import { NavigationParameterKey } from "../../navigators";
import {
  NavigationScreenConfigProps,
  NavigationStackScreenOptions,
  NavigationScreenProps
} from "react-navigation";
import { api } from "../../api/PlaceholderApi";
import { IPost, IComment, IUser } from "../../api/PlaceholderTypes";
import { Post } from "./Post";
import { Surface } from "react-native-paper";
import { CommentList } from "./CommentList";
import { View } from "react-native";
import { MAKE_NETWORK_REQUESTS } from "../../config";

interface IComponentProps {
  onAuthorPress: (userId: number) => void;
}

type DetailProps = NavigationScreenProps & IComponentProps;

interface IState {
  post?: IPost;
  author?: IUser;
  comments: IComment[];
}

class Detail extends React.Component<DetailProps, IState> {
  public static navigationOptions = ({
    navigation
  }: NavigationScreenConfigProps): NavigationStackScreenOptions => {
    return {
      title: navigation.getParam(NavigationParameterKey.PostTitle)
    };
  };

  constructor(props: DetailProps) {
    super(props);
    this.state = { comments: [] };
  }

  public componentDidMount() {
    if (MAKE_NETWORK_REQUESTS) {
      this.fetchPostAndComments();
    }
  }

  public render() {
    if (!this.state.post || !this.state.author) return null;

    const { title, body } = this.state.post;
    const { author } = this.state;

    return (
      <View>
        <CommentList
          headerComponent={
            <Post
              disabled={true}
              title={title}
              body={body}
              showAuthor={true}
              author={author}
              onAuthorPress={this.props.onAuthorPress}
            />
          }
          data={this.state.comments}
        />
      </View>
    );
  }

  private fetchPostAndComments = async () => {
    try {
      const postId = this.props.navigation.getParam(
        NavigationParameterKey.PostId
      );

      const post = (await api.fetchPosts(postId)) as IPost;

      if (post) {
        const author = (await api.fetchUser(post.userId)) as IUser;

        this.setState({ post, author });

        this.props.navigation.setParams({
          [NavigationParameterKey.PostTitle]: post.title
        });
      }

      const comments = await api.fetchCommentsForPost(postId);

      if (comments) {
        this.setState({ comments });
      }
    } catch (error) {}
  };
}

export default Detail;
