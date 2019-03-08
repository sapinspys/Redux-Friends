import React from 'react';

import { connect } from 'react-redux';
import { editFriend } from '../actions';

import { Card, 
  Button, 
  Dropdown, 
  DropdownMenu, 
  DropdownToggle,
  Form,
  Label,
  Input } from 'reactstrap';

// INLINE STYLING
const card = {
  width: '240px',
  marginBottom: '20px',
  background: 'whitesmoke',
  border: 'none',
  boxShadow: '0 0 10px white',
  maxHeight: '240px',
}

const cardTitle = {
  paddingBottom: '5px', 
  borderBottom: '1px solid silver', 
  background: 'steelblue',
  padding: '10px 0',
  color: 'whitesmoke',
}

const formStyles = {
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '300px',
  background: 'whitesmoke',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 19px black',
}

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-evenly',
}

const button = {
  width: '100px',
  marginBottom: '10px',
}

const dropdownMenu = {
  background: 'rgba(200,200,200,0)',
  border: 'none',
}

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      name: '',
      age: '',
      email: '',
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit(id) {
    return e => {
      e.preventDefault();

      const stateCopy = {...this.state};
      delete stateCopy.dropdownOpen;
      
      this.props.editFriend(id, stateCopy)
  
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen,
        name: '',
        age: '',
        email: '',
      }));
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
      name: this.props.friend.name,
      age: this.props.friend.age,
      email: this.props.friend.email,
    }));
  }

  render() {
    return (
      <Card style={card}>
        <h3 style={cardTitle}>{this.props.friend.name}</h3>
        <p><strong>Age</strong>:<br />{this.props.friend.age}</p>
        <p><strong>Email</strong>:<br />{this.props.friend.email}</p>
        <div style={buttonContainer}>
          <Dropdown isOpen={this.state.dropdownOpen} 
            toggle={() => this.toggle()} >
            <DropdownToggle 
              style={button}
              color='warning' 
              caret >
              Edit
            </DropdownToggle>
            <DropdownMenu style={dropdownMenu}>
              <Form onSubmit={this.handleSubmit(this.props.friend.id)} 
                style={formStyles} >
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
            </DropdownMenu>
          </Dropdown>
          <Button color='danger'
            style={button}
            onClick={() => this.props.deleteFriend()}>
              Delete
          </Button>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    editingFriend: state.friendReducer.fetchingFriends,
    error: state.friendReducer.error,
  }
}

export default connect(mapStateToProps, { editFriend })(Friend);
