import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';  
import Home from './Friends/Home';
import FriendsList from './Friends/FriendsList';
import AddFriendForm from './Friends/AddFriendForm';

class App extends React.Component {
 constructor() {
   super();
   this.state = {
     fr: []
   };
 }


componentDidMount() {
  axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log('res',res);
      this.setState({ fr: res.data });
    })
    .catch(err => console.err("err", err));
}

  render() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Home} />
      <Route path={'/friends'} render={props => {
        return <FriendsList {...props} fr={this.state.fr} />
      }}
      />
    </div>
  );
  }
}

export default App;
