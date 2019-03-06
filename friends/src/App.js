import React, { Component } from 'react';

import AddFriendFrom from './components/AddFriendForm';
import Friends from './components/Friends';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <AddFriendFrom />
      </div>
    );
  }
}

export default App;
