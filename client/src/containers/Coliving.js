import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index.js'


class Coliving extends Component {

  constructor(props) {
    super(props)
    this.props.actions.getColivings()
    this.loadProfiles()
  }

  loadProfiles() {
    return this.props.colivings
  }

  render() {
    return(
      // <ul className="cospace-container">
      // <Profile />
      // <Profile />
      // <Profile />
      // </ul>
      <div>
      {this.props.colivings}
      <Profile />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {colivings: state.colivings}
}

// function mapDispatchToProps(dispatch) {
//     return({
//         getColivings: () => {dispatch(getColivings)}
//     })
// }

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default Coliving = connect(mapStateToProps, mapDispatchToProps)(Coliving)
