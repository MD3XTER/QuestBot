import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./modules/reducers";
import sagas from "./modules/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
