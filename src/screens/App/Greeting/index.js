import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

import logo from "../../../images/logo.png";
import styles from "./styles";

import { authTokenChanged, questionnaireChanged } from "../../../modules/actions"
import { navigateTo, authentificate, getQuestionnaire } from "../../../utils";

class Greeting extends PureComponent {
  async componentWillMount() {
    const authToken = await authentificate();
    this.props.authTokenChanged(authToken);

    const questionnaire = await getQuestionnaire(authToken);
    this.props.questionnaireChanged(questionnaire);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Welcome to QuestBot</Text>

        <Image style={styles.logo} source={logo} />

        <Text style={styles.descriptionText}>
          "Here you can answer questions and you get to talk with me!"
        </Text>

        <Button
          title="BEGIN"
          buttonStyle={styles.button}
          onPress={() => navigateTo("Chat")}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ app: { authToken } }) => {
  return { authToken };
};

export default connect(mapStateToProps, { authTokenChanged, questionnaireChanged })(Greeting);

