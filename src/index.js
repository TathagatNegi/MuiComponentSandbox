import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import AppStore from "./Store/AppStore";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
