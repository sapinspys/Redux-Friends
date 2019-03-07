import React from 'react';

import Friend from './Friend';

// INLINE STYLING
const cardContainer = {
  width: '500px',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  marginLeft: '350px',
}

const Friends = props => {
  return (
    <div style={cardContainer}>
      {props.friends.map(friend => {
        return <Friend 
          key={friend.id} 
          friend={friend}
          deleteFriend={() => props.deleteFriend(friend.id)} />
      })}
    </div>
  )
}

export default Friends;