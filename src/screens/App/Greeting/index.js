import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import {Button} from "react-native-elements";
import { connect } from "react-redux";

import styles from "./styles";
import { navigateTo } from "../../../utils";

class Greeting extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.greetingTextContainer}>
        <Text style={styles.greetingText} >Welcome to QuestBot!</Text>
        </View>
        <Image style={styles.teamImage} source={require('../../../images/robo.png')} />
        <View style={styles.descriptionContainer}>
        <Text style={styles.description}>'"Here you can answer questions and you get to talk with me!"'</Text>
        </View>
        <Button title ="Begin!" buttonStyle={styles.continueButton} onPress={() => navigateTo('Chat')}>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => {
  return { steps: app.steps };
};

export default connect(
  mapStateToProps,
  {}
)(Greeting);
