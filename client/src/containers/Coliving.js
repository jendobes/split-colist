import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as actions from '../actions/index.js'
import {getColivings} from '../actions/index.js'


class Coliving extends Component {

  componentDidMount() {
    this.props.getColivings()
  }

  loadProfiles() {
    return this.props.colivings.map((coliving) => {
      return <p key={coliving.id}>{coliving.name}</p>
    })
  }

  render() {
    return(
      <div>
      {this.loadProfiles()}
      <Profile />
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

// const mapDispatchToProps = dispatch => {
//   return {actions: bindActionCreators(actions, dispatch)}
// }

// export default Coliving = connect(mapStateToProps, mapDispatchToProps)(Coliving)
export default connect(mapStateToProps, mapDispatchToProps)(Coliving)
