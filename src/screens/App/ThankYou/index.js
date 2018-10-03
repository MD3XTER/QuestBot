import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";

import styles from "./styles";

class ThankYou extends Component {
  render() {
    return (
      <View style={styles.thankYouContainer}>
        <View style={styles.goodbyeTextContainer}>
          <Text style={styles.goodbyeText}>Thank you for using QuestBot!</Text>
        </View>
        <Image style={styles.roboImage} source={require("../../../images/robo.png")}/>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>'"I hope you enjoyed your time with me, until next time!"'</Text>
        </View>
        <View style={styles.teamTextContainer}>
          <Text style={styles.teamText}>Development team</Text>
        </View>
        <View style={styles.imagesContainer}>
          <Image style={styles.teamImage} source={require("../../../images/max.jpg")}/>
          <Image style={styles.teamImage} source={require("../../../images/dogo.jpg")}/>
          <Image style={styles.teamImage} source={require("../../../images/dogo.jpg")}/>
          <Image style={styles.teamImage} source={require("../../../images/dogo.jpg")}/>
        </View>
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
)(ThankYou);
