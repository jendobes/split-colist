import React, { Component } from 'react';
import '../css/App.css';
import ColivingCard from '../components/ColivingCard'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {getColivings} from '../actions/index.js'


class Coliving extends Component {
debugger
  componentDidMount() {
    this.props.getColivings()
  }

  loadProfiles() {
    return this.props.colivings.map((coliving) => {
      return < ColivingCard key={coliving.id} cospace={coliving} />
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
  return {colivings: state.cospaces.colivings}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getColivings: getColivings}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Coliving)
