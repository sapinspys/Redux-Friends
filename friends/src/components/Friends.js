import React from 'react';

import Friend from './Friend';

// INLINE STYLING
const cardContainer = {
  width: '240px',
  display: 'flex',
  flexWrap: 'wrap',
}

const Friends = props => {
  return (
    <div style={cardContainer}>
      {props.friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />
      })}
    </div>
  )
}

export default Friends;