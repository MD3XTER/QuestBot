import React, { PureComponent } from "react";
import ChatBot from "react-native-chatbot";

import styles from "./styles";
import { getStepsFromQuestionnaire, navigateTo } from "../../../utils";

export default class Chat extends PureComponent {
  state = {
    steps: []
  };

  async componentWillMount() {
    const { questionnaire } = this.props;

    const steps = getStepsFromQuestionnaire(questionnaire);

    this.setState({ steps });
  }

  handleEnd = () => {
    setTimeout(() => navigateTo("ThankYou"), 5000);
  };

  render () {
    const { steps } = this.state;

    return (
      steps.length > 0 && (
        <ChatBot
          handleEnd={this.handleEnd}
          steps={steps}
          botAvatar="https://i.imgur.com/XnqSldH.png"
          userAvatar="https://i.imgur.com/7DEThbw.jpg"
          botBubbleColor="#8FCAFF"
          userBubbleColor="rgba(0,0,0,0.1)"
          contentStyle={styles.container}
        />
      )
    );
  }
}
