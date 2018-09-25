import React, { Component } from "react";
import { View, Text, Image} from "react-native";
import {Button} from "react-native-elements";
import { connect } from "react-redux";


import styles from "./styles";

const redirect = () => {

};

class Greeting extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
        <Text style={styles.greetingText} >
          Welcome to our app bro!
          Here you can like answer questions and shit
        </Text>
        <Button title="title" buttonStyle={styles.continueButton}/>
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
)(Greeting);
