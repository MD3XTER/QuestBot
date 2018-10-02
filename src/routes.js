import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import Greeting from "./screens/App/Greeting";
import Chat from "./screens/App/Chat";
import AppLoadingScreen from "./screens/App/ThankYou/index";

const AppStack = createStackNavigator(
  {
    Chat: {
      screen: Chat,
      navigationOptions: () => ({
        header: null
      }),
    },
    Greeting: {
      screen: Greeting,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "Greeting",
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
