import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class index extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
            <Button onClick={this.props.onAction} variant="primary">
              Book a seat!
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
