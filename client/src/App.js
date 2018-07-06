import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/index.css';
import Home from './components/Home';
import Header from './components/Header';
import Coliving from './containers/Coliving'
import Coworking from './containers/Coworking'
import './css/App.css';

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/" exact component={Home}/>
          <Route path="/coworking" component={Coworking}/>
          <Route path="/coliving" component={Coliving}/>
        </div>
      </Router>
    );
  }
}

export default App;
