import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Greeting from "./screens/App/Greeting";
import Chat from "./screens/App/Chat";
import ThankYou from "./screens/App/ThankYou";
import AppLoadingScreen from "./screens/App/ThankYou/index";
import { Button } from "react-native-elements";
import styles from "./screens/App/Chat/styles";
import ChatBot from "react-native-chatbot";
import React from "react";

const AppStack = createStackNavigator(
  {
    Greeting: {
      screen: Greeting,
      navigationOptions: () => ({
        header: null
      })
    },
    Chat: {
      screen: Chat
    },
    ThankYou: {
      screen: ThankYou,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Chat",
  }
);

const RootNavigator = createSwitchNavigator(
  {
    // AppLoading: AppLoadingScreen,
    App: AppStack
  },
  {
    initialRouteName: "App"
  }
);

export default RootNavigator;
