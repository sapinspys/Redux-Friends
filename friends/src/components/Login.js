import React, { Component } from 'react';

import { login } from '../actions';
import { connect } from 'react-redux';

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
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        <h3>{this.props.error}</h3>
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

