import React, { Component } from 'react';

// import AddFriendFrom from './components/AddFriendForm';
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
        <Friends friends={this.props.friends} />
        {/* <AddFriendFrom /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.fetchingReducer.friends,
    fetchingFriends: state.fetchingReducer.fetchingFriends,
    error: state.fetchingReducer.error,
  }
}

// the characters and the fetching boolean
export default connect(mapStateToProps, { fetchData })(App);

