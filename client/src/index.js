import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import rootReducer from './reducers';
import './index.css';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
//   rootReducer, applyMiddleware(thunk)
// )

ReactDOM.render(
  <Provider>
  <Home />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
