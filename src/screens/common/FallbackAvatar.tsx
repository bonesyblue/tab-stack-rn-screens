import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Title, Text } from "react-native-paper";

interface IComponentProps {
  firstName: string;
  lastName: string;
  diameter?: number;
}

type FallbackAvatarProps = IComponentProps;

export const FallbackAvatar: React.StatelessComponent<FallbackAvatarProps> = ({
  firstName,
  lastName,
  diameter
}) => {
  let computedStyle: ViewStyle = {};

  if (diameter) {
    computedStyle = {
      height: diameter
    };
  }

  return (
    <View style={[styles.avatar, computedStyle]}>
      <Text
        style={{
          fontSize: diameter ? 0.33 * diameter : 0.33 * 64,
          color: "white"
        }}
      >{`${firstName[0]}${lastName[0]}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 64,
    aspectRatio: 1,
    borderRadius: 32,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center"
  }
});
