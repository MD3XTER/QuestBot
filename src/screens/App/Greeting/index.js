import React, { PureComponent } from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

import store from "../../../store";
import { authentificate, getQuestionnaire, navigateTo } from "../../../utils";
import styles from "./styles";
import logo from "../../../images/logo.png";

export default class Greeting extends PureComponent {
  // async componentWillMount() {
  //   const authToken = await authentificate();
  //   // const questionnaire = await getQuestionnaire(authToken);
  //
  //   alert(this.props.authToken);
  // }

  render() {
    return (
      <View style={styles.container}>
        <store.Consumer>

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
        </store.Consumer>
      </View>
    );
  }
}

// export default props => (
  {/*<store.Consumer>*/}
    {/*<Greeting {...props} />*/}
  // </store.Consumer>
// );
