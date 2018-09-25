import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import RootNavigator from "./routes";
import { setTopLevelNavigator } from "./utils";

export default class Index extends Component {
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
