import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { IComment } from "../../api/PlaceholderTypes";
import { Comment } from "./Comment";

interface IComponentProps {
  data: IComment[];
  headerComponent?: React.ComponentType<any> | React.ReactElement | null;
}

type CommentListProps = IComponentProps;

export class CommentList extends React.Component<CommentListProps> {
  public render() {
    return (
      <FlatList
        ListHeaderComponent={this.props.headerComponent}
        data={this.props.data}
        renderItem={this.renderComment}
        keyExtractor={this.extractKeyFromItem}
      />
    );
  }

  private renderComment: ListRenderItem<IComment> = ({ item, index }) => {
    const author = item.name.split(" ");
    return (
      <Comment
        author={{ firstName: author[0], lastName: author[1] }}
        body={item.body}
      />
    );
  };

  private extractKeyFromItem = (item: IComment, index: number) =>
    `${index}-${item.id}`;
}
