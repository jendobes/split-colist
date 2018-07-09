import React from 'react';
import { Link } from 'react-router-dom';


import '../css/profile.css'

const ColivingCard = (props) => {

  const {name, location, rating, about, website, id} = props.cospace

  return (
    <div className="container">
      <div className="text-container">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>About: {about}</p>
        <Link to={`/colivings/${id}`}>View Page</Link>
      </div>
    </div>
  )

}

export default ColivingCard
