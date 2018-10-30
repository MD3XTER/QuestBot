import React, { Component } from "react";
import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import { connect } from "react-redux";
import ChatBot from "react-native-chatbot";
import { Overlay } from "react-native-elements";

import logo from "../../../images/logo.png";

import ImageLoader from "./ImageLoader";

import styles from "./styles";
import commonStyles from "../styles";

import { getStepsFromQuestionnaire, navigateTo } from "../../../utils";

class Chat extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Questbot Survey",
      headerTitleStyle: { color: "#8FCAFB" },
      headerLeft: null,
      headerRight: (
        <TouchableOpacity style={styles.helpButton} onPress={navigation.getParam("toggleOverlay")}>
          <Text style={{ color: "white" }}>Help</Text>
        </TouchableOpacity>
      )
    };
  };

  state = {
    steps: [],
    showOverlay: false
  };

  componentWillMount() {
    this.props.navigation.setParams({ toggleOverlay: this.toggleOverlay });

    const steps = getStepsFromQuestionnaire();
    this.setState({ steps });
  }

  toggleOverlay = () => {
    Keyboard.dismiss();
    this.setState({ showOverlay: !this.state.showOverlay });
  };

  handleEnd = () => {
    setTimeout(() => navigateTo("ThankYou"), 5000);
  };


  render() {
    const { steps } = this.state;

    return (
      <View style={styles.container}>
        <ChatBot
          handleEnd={this.handleEnd}
          steps={steps}
          botAvatar="https://i.imgur.com/XnqSldH.png"
          userAvatar="https://i.imgur.com/7DEThbw.jpg"
          botBubbleColor="#8FCAFF"
          userBubbleColor="rgba(0,0,0,0.1)"
          contentStyle={styles.chatScreen}
        />

        <Overlay
          overlayStyle={styles.overlay}
          isVisible={this.state.showOverlay}
          onBackdropPress={() => this.setState({ showOverlay: false })}
        >
          <ImageLoader style={styles.overlayImage} source={logo}/>

          <Text style={[commonStyles.descriptionText, { marginBottom: 0 }]}>
            If you ever feel like you want to quit, then type STOP in the chat.
          </Text>
        </Overlay>
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
