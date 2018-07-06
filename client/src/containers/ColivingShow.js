import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comments.js'
import '../css/App.css';

class ColivingShow extends Component {
  render() {
    return(
      <div className="center">
        <div className="card-container">
          <div className="card-text">
            <h2>{this.props.coliving.name}</h2>
            <p>Location: {this.props.coliving.location}</p>
            <p>About: {this.props.coliving.about}</p>
            <p>Rating: {this.props.coliving.rating}</p>
            <a href={this.props.coliving.website}>Website</a>
            <br/>
            <h3>Community Comments</h3>
            <Comments coliving={this.props.coliving}/>
          </div>
        </div>
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
