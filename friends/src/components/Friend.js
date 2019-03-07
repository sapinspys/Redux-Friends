import React from 'react';

import { Card, Button } from 'reactstrap';

// INLINE STYLING
const card = {
  width: '240px',
  marginBottom: '20px',
  background: 'whitesmoke',
  border: 'none',
  boxShadow: '0 0 10px white',
}

const cardTitle = {
  paddingBottom: '5px', 
  borderBottom: '1px solid silver', 
  background: 'navy',
  padding: '10px 0',
  color: 'whitesmoke',
}

const Friend = props => {
  return (
    <Card style={card}>
      <h3 style={cardTitle}>{props.friend.name}</h3>
      <p><strong>Age</strong>:<br />{props.friend.age}</p>
      <p><strong>Email</strong>:<br />{props.friend.email}</p>
      <Button color='danger'
        onClick={() => props.deleteFriend()}>
          Delete
      </Button>
    </Card>
  )
}

export default Friend;
