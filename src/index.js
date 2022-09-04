import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';

import './i18n';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import allReducers from "./reducers/index";

const history = createBrowserHistory();
const store=createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <App />
  </Router>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
