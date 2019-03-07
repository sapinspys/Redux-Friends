import React, { Component } from 'react';

import AddFriendFrom from './components/AddFriendForm';
import Friends from './components/Friends';

import { connect } from 'react-redux';
import { fetchData } from './actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends!</h1>
        <div className='flexContainer'>
          <AddFriendFrom />
          <Friends friends={this.props.friends} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendReducer.friends,
    fetchingFriends: state.friendReducer.fetchingFriends,
    error: state.friendReducer.error,
  }
}

// the characters and the fetching boolean
export default connect(mapStateToProps, { fetchData })(App);

