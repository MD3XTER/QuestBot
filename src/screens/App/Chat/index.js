import React, { Component } from "react";
import { connect } from "react-redux";
import ChatBot from "react-native-chatbot";

import styles from "./styles";
import { getSteps, getStepsFromQuestionnaire, navigateTo } from "../../../utils";

class Chat extends Component {
  state = {
    steps: []
  };

  componentWillMount() {
    const steps = getStepsFromQuestionnaire();

    this.setState({ steps });
  }

  handleEnd = () => {
    setTimeout(() => navigateTo("ThankYou"), 2000);
  };

  render () {
    const { steps } = this.state;

    return (
      <ChatBot
        handleEnd={this.handleEnd}
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
