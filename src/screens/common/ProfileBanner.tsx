import React from "react";
import { StyleSheet, View } from "react-native";
import { IUser } from "../../api/PlaceholderTypes";
import { Text, Surface, Title, Paragraph } from "react-native-paper";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { FallbackAvatar } from "./FallbackAvatar";
import { ProfileLocation } from "./ProfileLocation";

interface IComponentProps {
  profile: IUser;
}

type ProfileBannerProps = IComponentProps;

export const ProfileBanner: React.StatelessComponent<ProfileBannerProps> = ({
  profile
}) => {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <View style={{ alignSelf: "stretch", padding: 16, alignItems: "center" }}>
      <FallbackAvatar firstName={firstName} lastName={lastName} />
      <Title>{profile.name}</Title>
      <ProfileLocation
        locationDescription={`${profile.address.street}, ${
          profile.address.city
        }`}
      />
    </View>
  );
};
