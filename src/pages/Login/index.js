import React, { useState } from 'react';
import {
  Navbar,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from 'react-bootstrap';
import './index.css';
import TitleBar from '../../Components/TitleBar';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const onCLickLogin = () => {
    console.log('onClickLogin...');
    props.userHasAuthenticated(true);
    props.history.replace('/home');
  };

  function handleLogin() {}

  function handleLogout() {}

  return (
    <div>
      <center>
        <h3 style={{ marginTop: '30px' }}>Welcome to Explorer!</h3>
      </center>

      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!validateForm()}
            type="submit"
            onClick={onCLickLogin}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );

  // const goToHome = e => {
  //   e.preventDefault();
  //   window.location = '/home';
  // };
}
