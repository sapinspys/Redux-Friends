import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Navigation from './components/Navigation';
import FriendsPage from './components/FriendsPage';
import Login from './components/Login';
import Public from './components/Public';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navigation />
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends-page" component={FriendsPage} />
      </div>
    );
  }
}

export default App;
