import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import store from "./store";
import { peripheralDisconnected } from "./modules/actions";
import RootNavigator from "./routes";
import { setTopLevelNavigator } from "./utils";

export default class Index extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator
          ref={navigatorRef => {
            setTopLevelNavigator(navigatorRef, store);
          }}
        />
      </Provider>
    );
  }
}
