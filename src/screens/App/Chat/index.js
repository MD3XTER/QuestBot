import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import { connect } from "react-redux";
import ChatBot from "react-native-chatbot";

import styles from "./styles";
import { getSteps, getStepsFromQuestionnaire } from "../../../utils"

class Chat extends Component {
  render () {
    getStepsFromQuestionnaire();
    return (
      <View>
        <ChatBot
          steps={getSteps()}
          botAvatar={
            "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
          }
        />
      <View style={styles.container}>
        <ChatBot steps={}/>
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
)(Chat);
