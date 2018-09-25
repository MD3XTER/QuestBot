import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import ChatBot from "react-native-chatbot";

import { getSteps } from "../../../utils"

import styles from "./styles";

class Chat extends Component {
  render () {
    return (
      <View>
        <ChatBot
          style={{}}
          steps={getSteps()}
          botAvatar={
            "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
          }
        />
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
