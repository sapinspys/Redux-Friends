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
  constructor() {
    super();
  }

  render() {
    return (
      <div className='App'>
        <Navigation />
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends-page" component={FriendsPage} />
        {/* <Route path="/" />
        <Route path="/login" component={Login} /> */}
        {/* <Route exact path='/' 
          render={(props) => 
            <FriendsPage {...props} 
              friends={this.state.friends} 
              handleDelete={(name) => this.deleteFriend(name)}
              sendFriendData={(name) => this.sendFriendData(name)}  />} />
        <Route path='/add' 
          render={(props) => 
            <FriendForm {...props} 
              friends={this.state.friends}
              addFriend={(formState) => this.addFriend(formState)}
              friendToEdit={this.state.friendToEdit} />} /> */}
      </div>
    );
  }
}

export default App;
