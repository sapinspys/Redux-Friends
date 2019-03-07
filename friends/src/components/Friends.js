import React from 'react';

import Friend from './Friend';

// INLINE STYLING
const cardContainer = {
  width: '500px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
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