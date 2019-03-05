import React from "react";
import { FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { IPost } from "../../api/PlaceholderTypes";
import { Post } from "./Post";

interface IComponentProps {
  data: IPost[];
  headerComponent?: React.ComponentType<any> | React.ReactElement | null;
  onPostPress: (postId: number) => void;
}

type PostFeedProps = IComponentProps;

export class PostFeed extends React.Component<PostFeedProps> {
  public render() {
    return (
      <FlatList
        ListHeaderComponent={this.props.headerComponent}
        data={this.props.data}
        renderItem={this.renderPostTile}
        keyExtractor={this.extractKeyFromItem}
      />
    );
  }

  private renderPostTile: ListRenderItem<IPost> = ({ item, index }) => {
    return (
      <Post
        onPress={this.onPostPress(item.id)}
        title={item.title}
        body={item.body}
        showAuthor={false}
      />
    );
  };

  private extractKeyFromItem = (item: IPost, index: number) =>
    `${index}-${item.id}`;

  private onPostPress = (postId: number) => () => {
    this.props.onPostPress(postId);
  };
}
