import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  SafeAreaView
} from "react-native";
import NavigationService from "../../navigators/NavigationService";

interface IProps {
  text: string;
  buttonText: string;
  detailPageRouteId: string;
  navigationStackKey: string;
}

export default class PushScreen extends React.Component<IProps> {
  public render() {
    const { text, buttonText } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.topBox} />
        <View style={styles.middleBox}>
          <Text style={styles.text}>{text}</Text>
          <Button title={buttonText} onPress={this.pushToDetailScreen} />
        </View>
        <View style={styles.bottomBox} />
      </SafeAreaView>
    );
  }

  private pushToDetailScreen = () =>
    NavigationService.push(
      this.props.detailPageRouteId,
      undefined,
      this.props.navigationStackKey
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  topBox: {
    flex: 1,
    alignSelf: "stretch",
    alignContent: "flex-start",
    paddingLeft: 16,
    paddingTop: 32
  },
  middleBox: {
    flex: 1,
    justifyContent: "space-around"
  },
  bottomBox: { flex: 1 },
  text: {
    fontSize: 48,
    fontWeight: "bold"
  }
});
