import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ChatBot from "react-native-chatbot";

import styles from "./styles";
import { getSteps, getStepsFromQuestionnaire } from "../../../utils";

class Chat extends Component {
  render () {
   const steps = getStepsFromQuestionnaire();
   // const steps = getSteps();

    return (
      <ChatBot
        steps={steps}
        botAvatar={
          "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
        }
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
