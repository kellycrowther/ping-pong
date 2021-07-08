import React from "react";
import ReactDOM from "react-dom";
import "rxjs";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider, ReactReduxContext } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./core/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import { BrowserRouter } from "react-router-dom";
import history from "./helpers/history";

import epics from "./core/epics";
import AppContainer from "./containers/AppContainer/AppContainer";

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  rootReducer(),
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epics);

ReactDOM.render(
  <BrowserRouter history={history}>
    <Provider store={store} context={ReactReduxContext}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
