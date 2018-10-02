import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import {Button} from "react-native-elements";
import { connect } from "react-redux";

import styles from "./styles";
import { navigateTo } from "../../../utils";

class Greeting extends Component {
  render () {
    return (
      <View style={styles.greetingContainer}>
        <Image style={styles.image} source={require('../../../images/dogo.jpg')} />
        <Text style={styles.greetingText} >
          Welcome to our app bro!
          Here you can like answer questions and shit
        </Text>
        <Button title="Start" buttonStyle={styles.continueButton} onPress={() => navigateTo('Chat')}/>
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
