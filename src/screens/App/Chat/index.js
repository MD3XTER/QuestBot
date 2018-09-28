import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import { connect } from "react-redux";
import ChatBot from 'react-native-chatbot';


import styles from "./styles";

class Chat extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ChatBot steps={}/>
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
