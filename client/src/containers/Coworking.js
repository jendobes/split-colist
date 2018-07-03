import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import {getCoworkings} from '../actions/index.js'


class Coworking extends Component {
  render() {
    return(
      <ul className="cospace-container">
      <Profile />
      <Profile />
      <Profile />
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {coworkings: state.coworkings}
}

function mapDispatchToProps(dispatch) {
    return({
        getCoworkings: () => {dispatch(getCoworkings)}
    })
}

export default Coworking = connect(mapStateToProps, mapDispatchToProps)(Coworking)
