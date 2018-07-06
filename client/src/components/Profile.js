import React from 'react';
import '../css/profile.css'

const Profile = (props) => {
  return (
    <div className="container">
      <div className="text-container">
        <p>Name: {props.coliving.name}</p>
        <p>Location:</p>
        <p>About:</p>
        <p>Webiste:</p>
        <p>Rating:</p>
      </div>
    </div>
  )
}

export default Profile
