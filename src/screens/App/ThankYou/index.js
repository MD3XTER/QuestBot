import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import logo from "../../../images/logo.png";
import mihaiAvatar from "../../../images/mihai.jpg";
import armindaAvatar from "../../../images/arminda.jpg";
import andreiAvatar from "../../../images/andrei.jpg";
import maxAvatar from "../../../images/max.jpg";
import commonStyles from "../Greeting/styles";
import styles from "./styles";

export default class ThankYou extends Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.mainText}>Thank you for using QuestBot</Text>

        <Image style={commonStyles.logo} source={logo}/>

        <Text style={commonStyles.descriptionText}>
          "I hope you enjoyed your time with me, until next time!"
        </Text>

        <Text style={[commonStyles.mainText, { marginBottom: 10 }]}>Development team</Text>

        <View style={styles.teamContainer}>
          <View style={styles.memberContainer}>
            <Image style={styles.memberImage} source={maxAvatar}/>
            <Text style={styles.memberName}>Max</Text>
          </View>
          <View style={styles.memberContainer}>
            <Image style={styles.memberImage} source={armindaAvatar}/>
            <Text style={styles.memberName}>Arminda</Text>
          </View>
          <View style={styles.memberContainer}>
            <Image style={styles.memberImage} source={mihaiAvatar}/>
            <Text style={styles.memberName}>Mihai</Text>
          </View>
          <View style={styles.memberContainer}>
            <Image style={styles.memberImage} source={andreiAvatar}/>
            <Text style={styles.memberName}>Andrei</Text>
          </View>
        </View>
      </View>
    );
  }
}
