import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux'
import {getCoworkings} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom';
import CoworkingCard from '../components/CoworkingCard'
import CoworkingShow from './CoworkingShow'


class Coworking extends Component {

  componentDidMount() {
    this.props.getCoworkings()
  }

  loadProfiles() {
    return this.props.coworkings.map((coworking) => {
      return < CoworkingCard key={coworking.id} cospace={coworking} />
    })
  }

  render() {
    return(
      <div>
        <Route path={`${this.props.match.url}/:coworkingId`} component={CoworkingShow}/>
        <Route exact path={this.props.match.url} render={() => (
          this.loadProfiles()
        )}/>
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
