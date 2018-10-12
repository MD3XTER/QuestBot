import React, { Component } from "react";

import Greeting from "./screens/App/Greeting";
import store from "./store";
import RootNavigator from "./routes";
import { setTopLevelNavigator } from "./utils";

export default class Index extends Component {
// <RootNavigator ref={navigatorRef => setTopLevelNavigator(navigatorRef)} />

render() {
    return (
      <store.Provider value={"green"}>
          <Greeting />
      </store.Provider>
    );
  }
}
