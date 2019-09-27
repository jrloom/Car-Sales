import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import redux & react-redux components
import { createStore } from "redux";
import { Provider } from "react-redux";

// import reducer for createStore()
import { reducer } from "./reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

// Create centralized state repository
const store = createStore(reducer);

const rootElement = document.getElementById("root");

// Provide App with Store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
