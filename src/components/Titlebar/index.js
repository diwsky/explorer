import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import Button from '../Button';

export default class TitleBar extends Component {
  onCLickButton = () => {
    alert('Do login');
  };
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Explorer!</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/book">Book a trip!</Nav.Link>
          </Nav>
          <Form inline>
            <Button
              variant="outline-info"
              title={this.props.title}
              onClick={this.onCLickButton}
            ></Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
