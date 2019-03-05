import React from "react";
import { FallbackAvatar } from "./FallbackAvatar";
import { Card, Paragraph } from "react-native-paper";
import { View } from "react-native";

interface IComponentProps {
  author: {
    firstName: string;
    lastName: string;
  };
  body: string;
}

export const Comment: React.StatelessComponent<IComponentProps> = ({
  author,
  body
}) => {
  return (
    <View style={{ flexDirection: "row", paddingHorizontal: 16 }}>
      <FallbackAvatar
        firstName={author.firstName}
        lastName={author.lastName}
        diameter={44}
      />
      <Card style={{ alignSelf: "stretch" }}>
        <Card.Content>
          <Paragraph>{body}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};
