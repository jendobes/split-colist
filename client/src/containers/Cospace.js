import React, { Component } from 'react';
import '../css/App.css';
import Profile from '../components/Profile'

class Cospace extends Component {
  render() {
    return(
      <ul>
      <Profile />
      <Profile />
      <Profile />
      </ul>
    )
  }
}

export default Cospace