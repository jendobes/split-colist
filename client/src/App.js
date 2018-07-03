import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {Navbar} from 'react-bootstrap';
// import {connect} from 'react-redux'
// import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/index.css';
import Home from './components/Home';
import Header from './components/Header';
import Coliving from './containers/Coliving'
import Coworking from './containers/Coworking'

// import * as actions from './actions/'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header}/>
          <Route path="/" exact component={Home}/>
          <Route path="/coworking" exact component={Coworking}/>
          <Route path="/coliving" exact component={Coliving}/>
        </div>
      </Router>
    );
  }
}

// function mapStateToProps(state) {
//   // return {key: state.}
// }
//
// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators(actions, dispatch)}
// }
//
// export const App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
