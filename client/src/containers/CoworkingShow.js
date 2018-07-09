import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, getComments } from '../actions/index.js'
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import Comments from '../components/Comments.js'

class CoworkingShow extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
     this.props.addComment(this.state, this.props.match.url)
     this.setState({ value: ''})
   }

  render() {
    return(
      <div>

        <div className="card-container">

          <div className="card-text">
            <h2>{this.props.coworking.name}</h2>
            <p>Location: {this.props.coworking.location}</p>
            <p>About: {this.props.coworking.about}</p>
            <a href={this.props.coworking.website}>Website</a>
            <br/>
          </div>

      </div>

      <div className="card-container">
        <h3>Community Comments</h3>
        <Comments comments={this.props.coworking.comments} newComment={this.props.comments} />
      </div>

        <div className="card-container">
          <h2>Have you worked at {this.props.coworking.name}?</h2>

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

  const comments = state.cospaces.comments
  const coworking = state.cospaces.coworkings.find(coworking => coworking.id == ownProps.match.params.coworkingId)

  if (coworking) {
    return { coworking, comments }
  } else {
    return { coworking: {}, comments: {} }
  }
}

export default connect(mapStateToProps, { addComment })(CoworkingShow)
