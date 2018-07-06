import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ColivingShow from './ColivingShow';
import ColivingCard from '../components/ColivingCard.js'

const ColivingsPage = ({ match, colivings }) =>
  <div>
    <ColivingCard colivings={colivings} />
    <Route path={`${match.url}/:colivingId`} component={ColivingShow}/>
    <Route exact path={match.url} render={() => (
      <h3>Top Rated Colivings</h3>
    )}/>
  </div>;

const mapStateToProps = (state) => {
  return {
    colivings: state.colivings
  };
}



export default connect(mapStateToProps)(ColivingsPage);
