import React from 'react';
import '../App.css';


class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>co-list</h1>
          <p> find nomad approved co-living and co-working spaces around the world </p>
        </div>

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
