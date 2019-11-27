import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class index extends Component {
  render() {
    return (
      <div>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type={this.props.type}
            placeholder={this.props.label}
          />
        </Form.Group>
      </div>
    );
  }
}
