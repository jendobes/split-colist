import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';



class Home extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <div className="Coliving-container">
          <p className="text-box"><Link to='/colivings' style={{ textDecoration: 'none', color: 'white'}}>live</Link></p>
        </div>

        <div className="Coworking-container">
          <p className="text-box"><Link to='/coworkings' style={{ textDecoration: 'none', color: 'white'}}>work</Link></p>
        </div>

      </div>
    );
  }
}

export default Home
