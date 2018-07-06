import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import {getCoworkings} from '../actions/index.js'
import { bindActionCreators } from 'redux'


class Coworking extends Component {

  componentDidMount() {
    this.props.getCoworkings()
  }

  loadProfiles() {
    return this.props.coworkings.map((coworking) => {
      return < Profile key={coworking.id} cospace={coworking} />
    })
  }

  render() {
    return(
      <div>
      {this.loadProfiles()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {coworkings: state.cospaces.coworkings}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getCoworkings: getCoworkings}, dispatch)
}


export default Coworking = connect(mapStateToProps, mapDispatchToProps)(Coworking)
