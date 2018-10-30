import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Greeting from "./screens/App/Greeting";
import Chat from "./screens/App/Chat";
import ThankYou from "./screens/App/ThankYou";

const AppStack = createStackNavigator(
  {
    Greeting: {
      screen: Greeting,
      navigationOptions: () => ({
        header: null
      })
    },
    Chat: {
      screen: Chat,
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
    App: AppStack
  },
  {
    initialRouteName: "App"
  }
);

export default RootNavigator;
