import React, { Component } from 'react';

import AddFriendFrom from './AddFriendForm';
import Friends from './Friends';

import { connect } from 'react-redux';
import { fetchData, deleteFriend } from '../actions';

// INLINE STYLES
const app = {
  textAlign: 'center',
  marginTop: '25px',
}

const header = {
  color: 'white',
}

const flexContainer = {
  paddingTop: '25px',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '580px',
  margin: '0 auto',
}

class FriendsPage extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  deleteFriend = (id) => {
    this.props.deleteFriend(id);
  }

  render() {
    return (
      <div style={app}>
        <header style={header}>
          <h1>My Friends!</h1>
          <p>Add new friends or edit by clicking on a friend card.</p>
        </header>
        <div style={flexContainer}>
          <AddFriendFrom />
          <Friends 
            friends={this.props.friends}
            deleteFriend={(id) => this.deleteFriend(id)} />
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

export default connect(mapStateToProps, { fetchData, deleteFriend })(FriendsPage);

