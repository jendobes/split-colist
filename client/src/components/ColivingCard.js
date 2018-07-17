import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'


import '../css/profile.css'

class ColivingCard extends Component {


  render() {
  return (

    <div className="container">
      <div className="text-container">
        <p>Name: {this.props.cospace.name}</p>
        <p>Location: {this.props.cospace.location}</p>
        <p>About: {this.props.cospace.about}</p>        
        <Link to={`/colivings/${this.props.cospace.id}`}>View Page</Link>
      </div>
    </div>

  )
}

}

export default ColivingCard
