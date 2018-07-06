import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as actions from '../actions/index.js'
import {getColivings} from '../actions/index.js'


class Coliving extends Component {

  componentDidMount() {
    // this.props.actions.getColivings()
    this.props.getColivings()
    this.loadProfiles()
  }

  loadProfiles() {
    debugger
  }

  render() {
    return(
      <div>
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
