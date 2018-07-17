import React, { Component } from 'react';
import '../css/App.css';
import ColivingCard from '../components/ColivingCard'
import ColivingShow from './ColivingShow'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getColivings} from '../actions/index.js'
import { Route, Link, Switch } from 'react-router-dom';
import AddForm from './AddForm'

class Coliving extends Component {

  componentDidMount() {
    this.props.getColivings()
  }


  loadProfiles() {
    return this.props.colivings.map((coliving) => {
      return < ColivingCard key={coliving.id} cospace={coliving}/>
    })
  }

  render() {
    return(
      <div>
        <Switch>
        <Route path={`${this.props.match.url}/new`} render={() => (
          <AddForm type={this.props.match.url} />
        )}/>
        <Route path={`${this.props.match.url}/:colivingId`} component={ColivingShow}/>
        <Route exact path={this.props.match.url} render={() => (
          <div>
          <h2 className="top-link"><Link to={'/colivings/new'}>Add a new coliving space</Link></h2>
          {this.loadProfiles()}
          </div>
        )}/>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {colivings: state.cospaces.colivings}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getColivings: getColivings}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Coliving)
