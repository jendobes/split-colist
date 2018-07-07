import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Coliving from './containers/Coliving'
import Coworking from './containers/Coworking'

class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/" exact component={Home}/>
          <Route path="/coworkings" component={Coworking}/>
          <Route path="/colivings" component={Coliving}/>
        </div>
      </Router>
    );
  }
}

export default App;
