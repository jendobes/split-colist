import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux'
import {getCoworkings} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { Route, Link, Switch } from 'react-router-dom';
import CoworkingCard from '../components/CoworkingCard'
import CoworkingShow from './CoworkingShow'
import AddForm from './AddForm'


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
        <Switch>
        <Route path={`${this.props.match.url}/new`} render={() => (
          <AddForm history={this.props.history} />
        )}/>
        <Route path={`${this.props.match.url}/:coworkingId`} component={CoworkingShow}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
          <h2 className="center"><Link to={'/coworking/new'}>Add a new coworking space</Link></h2>
          {this.loadProfiles()}
          </div>
        )}/>
        </Switch>
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
