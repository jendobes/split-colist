import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

// import * as actions from './actions/'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>co-list</h1>
          <p> find nomad approved co-living and co-working spaces around the world </p>
        </div>

        <div className="Coliving-container">
          <p className="text-box">live</p>
        </div>

        <div className="Coworking-container">
          <p className="text-box">work</p>
        </div>
      </div>
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
