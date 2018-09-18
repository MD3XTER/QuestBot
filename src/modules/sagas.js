import { all, fork } from "redux-saga/effects";
import appSagas from "./App/appSagas";

export default function*() {
  yield all([fork(appSagas)]);
}
