import React from 'react';

import { Card } from 'reactstrap';

// INLINE STYLING
const card = {
  width: '225px',
}

const Friend = props => {
  return (
    <Card style={card}>
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </Card>
  )
}

export default Friend;
