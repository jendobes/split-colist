import React, { Component } from 'react'
import { Form, FormGroup, Button, Col, FormControl, ControlLabel } from 'react-bootstrap'

class AddForm extends Component {

  render() {
    return (
      <div className="cospace-container">
      <h1 className='center'> Add a new cospace! </h1>

          <Form horizontal>
      <FormGroup controlId="formHorizontalName">
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Name" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalLocation">
        <Col componentClass={ControlLabel} sm={2}>
          Location
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Location" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalAbout">
        <Col componentClass={ControlLabel} sm={2}>
          About
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="About" />
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalWebsite">
        <Col componentClass={ControlLabel} sm={2}>
          Website
        </Col>
        <Col sm={10}>
          <FormControl type="text" placeholder="Website" />
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


export default AddForm
