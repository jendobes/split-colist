import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from './reducers/index.js';
import './css/index.css';
import App from './App.js'
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
//   rootReducer, applyMiddleware(thunk)
// )

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider>
  <App />
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
