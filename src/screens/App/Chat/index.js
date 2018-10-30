import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ChatBot from "react-native-chatbot";
import { Overlay } from 'react-native-elements';
import logo from "../../../images/logo.png";

import styles from "./styles";
import { getStepsFromQuestionnaire, navigateTo } from "../../../utils";
import commonStyles from "../Greeting/styles";

class Chat extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      headerRight: (
        <TouchableOpacity style={ styles.helpButton }
          onPress={navigation.getParam('toggleOverlay')}
        >
          <Text style={{ color: 'white' }} >Help</Text>
        </TouchableOpacity>
    )}
  };

  state = {
    steps: [],
    showOverlay: false
  };

  componentWillMount() {
    this.props.navigation.setParams({ toggleOverlay: this.toggleOverlay });

    const steps = getStepsFromQuestionnaire();
    this.setState({ steps });
    // this.handleEnd = this.handleEnd.bind(this);
  }

  toggleOverlay = () => {
    this.setState({ showOverlay: !this.state.showOverlay });
  };

  handleEnd = () => {
    // setTimeout(() => navigateTo("ThankYou"), 5000);
  };

  // handleEnd({steps, values}){
  //   for(let i = 0; i < steps.length;i++){
  //     userResponse.push(`${values[i]}`);
  //   }
  // }

  render () {
    const { steps } = this.state;

    return (
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
          onBackdropPress={() => this.setState({ showOverlay: false})}
          borderRadius={30}
        >
          <Image style={styles.overlayImage} source={logo} />
          <Text style={commonStyles.descriptionText}>"If you ever feel like you want to quit, then type STOP in the chat."</Text>
        </Overlay>
      </View>
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
