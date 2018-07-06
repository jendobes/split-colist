import React, { Component } from 'react';
import { connect } from 'react-redux';

class CoworkingShow extends Component {

  render() {
    return(
      <div>
      <p>{this.props.coworking.name}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const coworking = state.cospaces.coworkings.find(coworking => coworking.id == ownProps.match.params.coworkingId)

  if (coworking) {
    return { coworking }
  } else {
    return { coworking: {} }
  }
}

export default connect(mapStateToProps)(CoworkingShow)
