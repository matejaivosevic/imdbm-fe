import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

function confStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });

  sagaMiddleware.run(rootSaga);

  return store;
}

export default confStore;
