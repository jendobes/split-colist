import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import {getColivings} from '../actions/index.js'


class Coliving extends Component {
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
  return {colivings: state.colivings}
}

function mapDispatchToProps(dispatch) {
    return({
        getColivings: () => {dispatch(getColivings)}
    })
}

export default Coliving = connect(mapStateToProps, mapDispatchToProps)(Coliving)
