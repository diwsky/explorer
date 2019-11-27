import React from 'react';
import TextFields from '../../components/TextFields';
import Button from '../../components/Button';
import { Navbar } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
const style = {
  marginTop: '10%',
  width: '20%',
};

const onCLickLogin = () => {
  console.log('onClickLogin...');
  return <Link to="/home"></Link>;
};

class Login extends React.Component {
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
            <Button onClick={onCLickLogin}> </Button>
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
