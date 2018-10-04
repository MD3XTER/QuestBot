import React, { Component } from "react";
import { connect } from "react-redux";
import ChatBot from "react-native-chatbot";

import styles from "./styles";
import { getStepsFromQuestionnaire, navigateTo } from "../../../utils";

class Chat extends Component {
  state = {
    steps: []
  };

  componentWillMount() {
    const steps = getStepsFromQuestionnaire();
    this.setState({ steps });
  }

  handleEnd = () => {
    setTimeout(() => navigateTo("ThankYou"), 5000);
  };

  render () {
    const { steps } = this.state;

    return (
      <ChatBot
        handleEnd={this.handleEnd}
        steps={steps}
        botAvatar="https://i.imgur.com/XnqSldH.png"
        userAvatar="https://i.imgur.com/7DEThbw.jpg"
        botBubbleColor="#8FCAFF"
        userBubbleColor="rgba(0,0,0,0.1)"
        contentStyle={styles.container}
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
