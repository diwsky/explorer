import React, { Component } from 'react';
import {
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import Button from '../../Components/Button';

class Book extends Component {
  onClickSubmit = () => {
    alert('submit!');
  };

  onSelectedDestination = id => {
    console.log(id);
    switch (id) {
      case '1':
        return (
          <Form.Control as="select">
            <option selected>Gede</option>
            <option>Slamet</option>
            <option>Semeru</option>
          </Form.Control>
        );

      case '2':
        return (
          <Form.Control as="select">
            <option>Gede</option>
            <option selected>Slamet</option>
            <option>Semeru</option>
          </Form.Control>
        );
      default:
        return (
          <Form.Control as="select">
            <option>Gede</option>
            <option>Slamet</option>
            <option selected>Semeru</option>
          </Form.Control>
        );
    }
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <div
          style={{
            paddingLeft: '300px',
            paddingRight: '300px',
            marginTop: '50px',
          }}
        >
          <h1>Choose your adventure!</h1>
          <p>Please fill in your trip details down below</p>

          <div style={{ display: 'flex', justifyContent: 'column' }}>
            {' '}
            <h4>Destination</h4>
            <Form style={{ marginLeft: '20px' }}>
              <Form.Row>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  {this.onSelectedDestination(id)}
                </Form.Group>
              </Form.Row>
            </Form>
          </div>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nama depan</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nama Belakang</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Kota</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Negara</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Singapore</option>
                  <option>Brunei</option>
                  <option>Thailand</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Kode pos</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <center>
              <Button
                title="Submit!"
                onClick={this.onClickSubmit}
              ></Button>
            </center>
          </Form>
        </div>
      </div>
    );
  }
}
export default Book;
