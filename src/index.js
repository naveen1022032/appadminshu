import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";

import {configureStore} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore({})}>
    <React.Fragment>
      <HashRouter>
        <App />
      </HashRouter>
    </React.Fragment>
  </Provider>
);
reportWebVitals();
// serviceWorker.unregister();

