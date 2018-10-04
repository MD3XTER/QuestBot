import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import {Button} from "react-native-elements";

import logo from "../../../images/logo.png"
import styles from "./styles";
import { navigateTo } from "../../../utils";

export default class Greeting extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome to QuestBot</Text>

        <Image style={styles.logo} source={logo} />

        <Text style={styles.descriptionText}>
          "Here you can answer questions and you get to talk with me!"
        </Text>

        <Button
          title="BEGIN"
          buttonStyle={styles.button}
          onPress={() => navigateTo('Chat')}
        />
      </View>
    );
  }
}
