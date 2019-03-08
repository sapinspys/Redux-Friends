import React, { Component } from 'react';

import { login } from '../actions';
import { connect } from 'react-redux';

import { Button, Form, Label, Input } from 'reactstrap';

// INLINE STYLING
const loginContainer = {
  width: '500px',
  margin: '0 auto',
  textAlign: 'center',
  marginTop: '70px',
}

const loginForm = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '300px',
  background: 'whitesmoke',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px white',
  margin: '0 auto'
}

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => {
        // only fires if login call is successful
        this.props.history.push('/friends-page');
      })

    this.setState({    
      credentials: {
        username: '',
        password: ''
    }})
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    return (
      <div style={loginContainer}>
        <Form style={loginForm}
          onSubmit={this.login}>
          <Label style={{color:'gray', fontSize: '1.4rem'}}>
            My Friends! Login
          </Label>
          <Label>
            Username:
            <Input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              />
          </Label>
          <Label>
            Password:
            <Input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </Label>
          <Button color='primary'>Log in</Button>
        </Form>
        <p style={{color: 'white', marginTop: '10px'}}>{this.props.error}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggingIn: state.loginReducer.loggingIn,
    error: state.loginReducer.error,
  }
}

export default connect(mapStateToProps, { login })(Login);

