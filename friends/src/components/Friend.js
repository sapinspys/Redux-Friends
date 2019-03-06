import React from 'react';

const Friend = props => {
  return (
    <div className='friendCard'>
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  )
}

export default Friend;
