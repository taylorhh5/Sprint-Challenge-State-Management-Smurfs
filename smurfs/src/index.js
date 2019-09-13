import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import {reducer} from "./reducers/index.js"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const smurfState = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={smurfState}><App /></Provider>, rootElement);
