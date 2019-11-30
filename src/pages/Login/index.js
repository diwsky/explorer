import React from 'react';
import TextFields from '../../components/TextFields/';
import Button from '../../components/Button/';
import { Navbar } from 'react-bootstrap';

const style = {
  marginTop: '10%',
  width: '20%',
};

class Login extends React.Component {
  onCLickLogin = () => {
    console.log('onClickLogin...');
    this.props.history.replace('/home');
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./img/explorer.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Explorer!
          </Navbar.Brand>
        </Navbar>

        <center>
          <div style={style}>
            <TextFields label={'Enter Email'} type={'email'} />
            <TextFields label={'Enter Password'} type={'password'} />
            <Button onClick={this.onCLickLogin}> </Button>
          </div>
        </center>
      </div>
    );
  }

  goToHome = e => {
    e.preventDefault();
    window.location = '/home';
  };
}

export default Login;
