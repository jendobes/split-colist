import React from 'react';
import '../css/profile.css'

const Profile = (props) => {

  const {name, location, rating, about, website} = props.cospace

  return (
    <div className="container">
      <div className="text-container">
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>About: {about}</p>
        <p>Webiste: {website}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  )
}

export default Profile
