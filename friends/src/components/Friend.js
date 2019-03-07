import React from 'react';

import { Card } from 'reactstrap';

// INLINE STYLING
const card = {
  width: '240px',
  marginBottom: '20px',
  background: 'whitesmoke',
  border: 'none',
  boxShadow: '0 0 5px black',
}

const cardTitle = {
  paddingBottom: '5px', 
  borderBottom: '1px solid silver', 
  background: 'silver',
  padding: '5px 0',
}

const Friend = props => {
  return (
    <Card style={card}>
      <h3 style={cardTitle}>{props.friend.name}</h3>
      <p><strong>Age</strong>:<br />{props.friend.age}</p>
      <p><strong>Email</strong>:<br />{props.friend.email}</p>
    </Card>
  )
}

export default Friend;
