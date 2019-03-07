import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addFriend } from '../actions';

import { Button, Form, Label, Input } from 'reactstrap';

// INLINE STYLING
const formStyles = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '350px',
  background: 'whitesmoke',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px white',
}

class AddFriendForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }
  
    handleChange = e => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addFriend(this.state);

      this.setState({
        name: '',
        age: '',
        email: '',
      })
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit} style={formStyles}>
          <Label style={{color:'gray', fontSize: '1.4rem'}}>Add a Friend</Label>
          <Label>
            Name:
            <Input type="text" 
              value={this.state.name} 
              onChange={this.handleChange} 
              name='name' />
          </Label>
          <Label>
            Age:
            <Input type="text" 
              value={this.state.age} 
              onChange={this.handleChange} 
              name='age' />
          </Label>
          <Label>
            Email:
            <Input type="text" 
              value={this.state.email} 
              onChange={this.handleChange} 
              name='email' />
          </Label>
          <Button color='primary' block>Submit</Button>
        </Form>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      addingFriend: state.friendReducer.addingFriend,
      error: state.friendReducer.error,
    }
  }
  
  export default connect(mapStateToProps, { addFriend })(AddFriendForm);