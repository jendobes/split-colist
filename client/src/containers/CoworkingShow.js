import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import Comments from '../components/Comments.js'

class CoworkingShow extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadComments = this.loadComments.bind(this);

      this.state = {
        value: '',
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
     this.props.addComment(this.state, this.props.coworking.id)
     this.setState({ value: ''})
     this.forceUpdate()
   }

   loadComments() {
     let id = this.props.coworking.id
     let comments = this.props.getComments(id)
   }

  render() {
    return(
      <div>

        <div className="card-container">

          <div className="card-text">
            <h2>{this.props.coworking.name}</h2>
            <p>Location: {this.props.coworking.location}</p>
            <p>About: {this.props.coworking.about}</p>
            <p>Rating: {this.props.coworking.rating}</p>
            <a href={this.props.coworking.website}>Website</a>
            <br/>
            <h3 onClick={this.loadComments}>Community Comments</h3>
        
          </div>

        </div>

        <br/>

        <div className="card-container">
          <h2>Have you stayed at {this.props.coworking.name}?</h2>

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
  const coworking = state.cospaces.coworkings.find(coworking => coworking.id == ownProps.match.params.coworkingId)

  if (coworking) {
    return { coworking }
  } else {
    return { coworking: {} }
  }
}

export default connect(mapStateToProps)(CoworkingShow)
