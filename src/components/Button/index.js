import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class index extends Component {
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.props.onClick}>
          {this.props.title}
        </Button>
      </div>
    );
  }
}
