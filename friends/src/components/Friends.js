import React from 'react';

const Friends = props => {
  return (
    <div>
      <h1>Testing</h1>
      {props.friends.map(friend => {
        return <div key={friend.id}>{friend.name}</div>
      })}
    </div>
  )
}

export default Friends;