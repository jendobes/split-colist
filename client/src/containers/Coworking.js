import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import {getCoworkings} from '../actions/index.js'
import { bindActionCreators } from 'redux'


class Coworking extends Component {
  render() {
    return(
      <ul className="cospace-container">

      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {coworkings: state.coworkings}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getCoworkings: getCoworkings}, dispatch)
}


export default Coworking = connect(mapStateToProps, mapDispatchToProps)(Coworking)
