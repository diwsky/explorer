import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default class index extends Component {
  handleOnClick = id => {
    console.log(id);
    window.location = '/book/' + id + '/';
  };

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.desc}</Card.Text>
            <Button
              onClick={() =>
                this.handleOnClick(this.props.indexValue)
              }
              variant="primary"
            >
              Book a seat!
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
