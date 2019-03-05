import React from "react";
import { TouchableOpacity } from "react-native";
import { Card, Title, Paragraph, Text } from "react-native-paper";
import { FallbackAvatar } from "./FallbackAvatar";
import { IUser } from "../../api/PlaceholderTypes";

interface IComponentProps {
  onPress?: () => void;
  title: string;
  body: string;
  disabled?: boolean;
  showAuthor: boolean;
  onAuthorPress?: (userId: number) => void;
  author?: IUser;
}

export class Post extends React.Component<IComponentProps> {
  public render() {
    const { onPress, title, body, disabled, showAuthor, author } = this.props;

    return (
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Card style={{ alignSelf: "stretch" }}>
          <Card.Content>
            <Title numberOfLines={1} ellipsizeMode={"tail"}>
              {title}
            </Title>
            <Paragraph>{body}</Paragraph>
            {showAuthor && author && (
              <TouchableOpacity
                onPress={this.onAuthorPress}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 8
                }}
              >
                <FallbackAvatar
                  diameter={44}
                  firstName={author.name.split(" ")[0]}
                  lastName={author.name.split(" ")[1]}
                />
                <Text style={{ marginLeft: 8 }}>{`by ${
                  author.name.split(" ")[0]
                } ${author.name.split(" ")[1]}`}</Text>
              </TouchableOpacity>
            )}
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  }

  private onAuthorPress = () => {
    if (this.props.onAuthorPress && this.props.author) {
      this.props.onAuthorPress(this.props.author.id);
    }
  };
}
