import React from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css'

const CoworkingCard = (props) => {

  const {name, location, rating, about, website, id} = props.cospace

  return (
    <div className="container">
      <div className="text-container">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>About: {about}</p>
        <p>Webiste: {website}</p>
        <p>Rating: {rating}</p>
        <Link to={`/coworking/${id}`}>View Page</Link>
      </div>
    </div>
  )
}

export default CoworkingCard
