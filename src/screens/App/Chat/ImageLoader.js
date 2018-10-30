import React, { PureComponent } from "react";
import { Animated } from "react-native";

export default class ImageLoader extends PureComponent {
  state = {
    opacity: new Animated.Value(0)
  };

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true
    }).start();
  };

  render() {
    return (
      <Animated.Image
        {...this.props}
        onLoad={this.onLoad}
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
