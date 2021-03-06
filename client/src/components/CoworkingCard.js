import React from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css'

const CoworkingCard = (props) => {

  const {name, location, about, id} = props.cospace

  return (
    <div className="container">
      <div className="text-container">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>About: {about}</p>
        <Link to={`/coworkings/${id}`}>View Page</Link>
      </div>
    </div>
  )
}

export default CoworkingCard
