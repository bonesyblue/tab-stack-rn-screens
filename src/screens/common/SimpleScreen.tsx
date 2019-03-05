import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface IProps {
  text: string;
}

export default class SimpleScreen extends React.Component<IProps> {
  public render() {
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 48,
    fontWeight: "bold"
  }
});
