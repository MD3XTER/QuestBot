import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import styles from "./styles";

class ThankYou extends Component {
  render () {
    return (
      <View style={styles.thankYouContainer}>
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
