import React from 'react';
import '../App.css';


class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="Coliving-container">
          <p className="text-box">live</p>
        </div>

        <div className="Coworking-container">
          <p className="text-box">work</p>
        </div>
      </div>
    );
  }
}

export default Home
