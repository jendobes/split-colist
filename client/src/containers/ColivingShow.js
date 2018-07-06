import React, { Component } from 'react';
import { connect } from 'react-redux';

class ColivingShow extends Component {

  render() {
    return(
      <div>
      <p>{this.props.coliving.name}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const coliving = state.cospaces.colivings.find(coliving => coliving.id == ownProps.match.params.colivingId)

  if (coliving) {
    return { coliving }
  } else {
    return { coliving: {} }
  }
}

export default connect(mapStateToProps)(ColivingShow)
