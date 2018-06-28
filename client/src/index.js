import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import rootReducer from './reducers';
import './index.css';
import Home from './components/Home';
import Header from './components/Header';
import Coworking from './containers/Coworking'
import registerServiceWorker from './registerServiceWorker';

// const store = createStore(
//   rootReducer, applyMiddleware(thunk)
// )

ReactDOM.render(
<Router>
  <div>
    <Route path="/" component={Header}/>
    <Route path="/" exact component={Home}/>
    <Route path="/coworking" exact component={Coworking}/>
  </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
