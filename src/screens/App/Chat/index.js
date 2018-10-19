import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Image, TouchableOpacity, Keyboard, Animated } from "react-native";
import ChatBot from "react-native-chatbot";
import { Overlay } from "react-native-elements";
import logo from "../../../images/logo.png";

import styles from "./styles";
<<<<<<< HEAD
import { getStepsFromQuestionnaire, navigateTo, userResponses } from "../../../utils";
import { steps } from "../../../utils/app";
=======
import { getStepsFromQuestionnaire, navigateTo } from "../../../utils";
import commonStyles from "../Greeting/styles";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1]
                })
              }

            ]
          },
          this.props.style
        ]}
      />
    );
  }
}
>>>>>>> 019ce98e63fb528ef554581d7bf7337bc9d24a25

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
     this.handleEnd = this.handleEnd.bind(this);
  }

<<<<<<< HEAD
  handleEnd = ({values}) => {
    for(let value of values){
      userResponses.push(`${value}`);
    }
=======
  toggleOverlay = () => {
    Keyboard.dismiss();
    this.setState({ showOverlay: !this.state.showOverlay });
  };

  handleEnd = () => {
>>>>>>> 019ce98e63fb528ef554581d7bf7337bc9d24a25
    setTimeout(() => navigateTo("ThankYou"), 5000);
  };


  render() {
    const { steps } = this.state;

    return (
<<<<<<< HEAD
      <ChatBot
        handleEnd={this.handleEnd}

        steps={steps}
        botAvatar="https://i.imgur.com/XnqSldH.png"
        userAvatar="https://i.imgur.com/7DEThbw.jpg"
        botBubbleColor="#8FCAFF"
        userBubbleColor="rgba(0,0,0,0.1)"
        contentStyle={styles.container}
      />
=======
      <View style={styles.mainContainer}>
        <ChatBot
          handleEnd={this.handleEnd}
          steps={steps}
          botAvatar="https://i.imgur.com/XnqSldH.png"
          userAvatar="https://i.imgur.com/7DEThbw.jpg"
          botBubbleColor="#8FCAFF"
          userBubbleColor="rgba(0,0,0,0.1)"
          contentStyle={styles.container}
        />
        <Overlay
          overlayStyle={styles.overlay}
          isVisible={this.state.showOverlay}
          onBackdropPress={() => this.setState({ showOverlay: false })}
        >
          <ImageLoader style={styles.overlayImage} source={logo}/>
          <Text style={commonStyles.descriptionText}>"If you ever feel like you want to quit, then type STOP in the
            chat."</Text>
        </Overlay>
      </View>
>>>>>>> 019ce98e63fb528ef554581d7bf7337bc9d24a25
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