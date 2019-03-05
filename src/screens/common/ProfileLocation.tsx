import React from "react";
import { View } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Paragraph } from "react-native-paper";

interface IComponentProps {
  locationDescription: string;
}

type ProfileLocationProps = IComponentProps;

export const ProfileLocation: React.StatelessComponent<
  ProfileLocationProps
> = ({ locationDescription }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <MaterialCommunityIcon name={"map-marker"} size={12} />
      <Paragraph>{locationDescription}</Paragraph>
    </View>
  );
};
