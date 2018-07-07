import React, { Component } from 'react'
import { Form, FormGroup, Button, Col, FormControl, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addColiving } from '../actions/index'
import { Route } from 'react-router'
import Coliving from './Coliving'

class AddForm extends Component {

  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      name: '',
      location: '',
      about: '',
      website: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addColiving(this.state)
    this.setState({
      name: '',
      location: '',
      about: '',
      website: ''
    });
    
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="cospace-container">
      <h1 className='center'> Add a new cospace! </h1>

          <Form horizontal onSubmit={this.handleSubmit}>
      <FormGroup controlId="formHorizontalName">
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Name" name="name" onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalLocation">
        <Col componentClass={ControlLabel} sm={2}>
          Location
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Location" name="location" onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalAbout">
        <Col componentClass={ControlLabel} sm={2}>
          About
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="About" name="about" onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalWebsite">
        <Col componentClass={ControlLabel} sm={2}>
          Website
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Website" name="website" onChange={this.handleChange}/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type="submit">Add</Button>
        </Col>
      </FormGroup>
    </Form>

</div>
    )
  }
}

export default connect(null, { addColiving })(AddForm)
