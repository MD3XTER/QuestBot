import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import Chat from "./screens/App/Chat";
import AppLoadingScreen from "./screens/App/Chat/index";

const AppStack = createStackNavigator(
  {
    Chat: {
      screen: Chat,
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
