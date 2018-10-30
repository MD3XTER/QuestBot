import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

import logo from "../../../images/logo.png";
import styles from "./styles";

import commonStyles from "../styles";
import { navigateTo } from "../../../utils";

export default class Greeting extends Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.mainText}>Welcome to QuestBot</Text>

        <Image style={commonStyles.logo} source={logo} />

        <Text style={commonStyles.descriptionText}>
          "Here you can answer questions and you get to talk with me!"
        </Text>

        <Button
          title="BEGIN"
          buttonStyle={styles.button}
          onPress={() => navigateTo("Chat")}
        />
      </View>
    );
  }
}
