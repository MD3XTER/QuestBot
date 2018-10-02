import React, { Component } from "react";
import { View, Text, ListView, Image } from "react-native";
import { connect } from "react-redux";

import styles from "./styles";
import { navigateTo } from "../../../utils";

const image1 = require('../../../images/dogo.jpg');

var data = [{title: "Max", image: image1}, {title: "Andrei", image: image1}];

class ThankYou extends Component {
  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  //   this.state = {
  //     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  //   };
  // }
  render () {
    return (
      <View style={styles.thankYouContainer}>
        <Text style={styles.goodbyeText} >
          Thanks for using this app!
        </Text>
        <Image style={styles.bye} source={require("../../../images/bye.png")}/>
        <Text style={styles.teamText}>
          Development team
        </Text>
        <View style={styles.imagesContainer}>
          <Image style={styles.image} source={require('../../../images/dogo.jpg')} />
          <Image style={styles.image} source={require('../../../images/dogo.jpg')} />
          <Image style={styles.image} source={require('../../../images/dogo.jpg')} />
          <Image style={styles.image} source={require('../../../images/dogo.jpg')} />
        </View>
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
)(ThankYou);
