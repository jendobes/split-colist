import React from 'react';
import '../css/App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
    <div className="App">
      <div className="App-header">
        <h1><Link to='/' style={{ textDecoration: 'none', color: 'white'}}>co-list</Link></h1>
        <p> find nomad approved co-living and co-working spaces around the world </p>
      </div>
    </div>
    </div>
  )
}

export default Header
