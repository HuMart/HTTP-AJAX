import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';  
import FriendList from './Friends/FriendList';
import FriendForm from './Friends/FriendForm';
import UpdateFriendComponent from './Friends/UpdateFriendComponent'


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      friends: []
      
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log("response:", res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.error("you got an error:", err));
  }

  postFriend = friend => {
    
    axios
    .post("http://localhost:5000/friends", friend)
    .then(res =>{
      console.log("post response", res)
      this.setState({ friends: res.data})
    })
    .catch(err => console.error('post error:', err))
  }

  updateFriend = (friend, id) => {
    console.log('post friend.. ')

    axios
    .put(`http://localhost:5000/friends/${id}`, friend)
    .then(res =>{
      console.log("put response", res.data)
      this.setState({ friends: res.data})
    })
    .catch(err => console.error('put/update error:', err))
  }

  deleteFriend = id => {
    console.log('delete friend.. ')
    
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res =>{
      console.log("delete response", res.data)
      this.setState({ friends: res.data})
    })
    .catch(err => console.error('delete error:', err))
  }


 changeFriendHandler = e => {
   this.setState({
    friendInfo: {
      ...this.state.friendInfo,
      [e.target.name]: e.target.value
          }
   })
 }
  
  render() {
    return (
      <div className="App">
        <h1>My Friends List</h1>
        <Route exact path="/" render={props => <FriendList {...props} updateFriend={this.updatefriend} deleteFriend={this.deleteFriend} friends={this.state.friends}/> }/>
        <Route path ="/friends" />
        <FriendForm 
          postFriend={this.postFriend}
        />
        <Route exact path='/friends/:id' render={props =>  <UpdateFriendComponent updateFriend={this.updateFriend} />} />
      </div>
    );
  }
}

export default App;
