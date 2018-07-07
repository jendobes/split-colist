import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import { addComment } from '../actions/index.js'
import Comments from '../components/Comments.js'
import '../css/App.css';

class ColivingShow extends Component {
constructor() {
  super()

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }


  getValidationState() {
   const length = this.state.value.length;
   if (length > 30) return 'success';
   else if (length > 10) return 'warning';
   else if (length > 0) return 'error';
   return null;
 }

 handleChange(e) {
   this.setState({ value: e.target.value });
 }

 handleSubmit(e) {
   e.preventDefault()
   this.props.addComment(this.state, this.props.coliving.id)
   this.setState({ value: ''})
 }


  render() {
    return(
      <div>

        <div className="card-container">

          <div className="card-text">
            <h2>{this.props.coliving.name}</h2>
            <p>Location: {this.props.coliving.location}</p>
            <p>About: {this.props.coliving.about}</p>
            <p>Rating: {this.props.coliving.rating}</p>
            <a href={this.props.coliving.website}>Website</a>
            <br/>
            <h3>Community Comments</h3>
            <Comments coliving={this.props.coliving}/>
          </div>

        </div>

        <br/>

        <div className="card-container">
          <h2>Have you stayed at {this.props.coliving.name}?</h2>

          <form onSubmit={this.handleSubmit}>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Leave a comment or rate this coliving</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Comment must be over 30 characters</HelpBlock>
            </FormGroup>
          </form>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const coliving = state.cospaces.colivings.find(coliving => coliving.id == ownProps.match.params.colivingId)

  if (coliving) {
    return { coliving }
  } else {
    return { coliving: {} }
  }
}

export default connect(mapStateToProps, { addComment })(ColivingShow)
