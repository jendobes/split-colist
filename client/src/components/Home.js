import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="Coliving-container">
          <p className="text-box"><Link to='/coworking' style={{ textDecoration: 'none', color: 'white'}}>live</Link></p>
        </div>

        <div className="Coworking-container">
          <p className="text-box"><Link to='/coworking' style={{ textDecoration: 'none', color: 'white'}}>work</Link></p>
        </div>

      </div>
    );
  }
}

export default Home
