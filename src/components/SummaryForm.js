import React, { PureComponent } from "react";
import { View, Text } from "react-native";

export default class SummaryForm extends PureComponent {
  render() {
    const { steps } = this.props;

    const findOpenQuestion = /^[0-9]+. /;

    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
        {Object.keys(steps)
          .filter(key => steps[key].message && steps[key].message.match(findOpenQuestion))
          .map(key => <Text>{steps[key].message}</Text>)
        }
      </View>
    );
  }
};
