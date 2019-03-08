import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Root from './components/Root';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
