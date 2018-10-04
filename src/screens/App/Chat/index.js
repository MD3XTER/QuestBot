import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ChatBot from "react-native-chatbot";

import styles from "./styles";
import { getSteps, getStepsFromQuestionnaire } from "../../../utils";

class Chat extends Component {
  render () {
   // getStepsFromQuestionnaire();

    let steps = [
      {
        id: "1",
        message: "test",
        end: true
      }
    ];

    steps = getStepsFromQuestionnaire();
    return (
      <ChatBot
        steps={steps}
        botAvatar={"https://i.imgur.com/zy8gVf5.png"}
        botBubbleColor={'orange'}
        style={styles.botStyle}

      />
    );
  }
}

const mapStateToProps = ({ app }) => {
  return { steps: app.steps }
};

export default connect(
  mapStateToProps,
  {}
)(Chat);
