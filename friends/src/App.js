import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';  
import FriendsList from './Friends/FriendsList';
import FriendForm from './Friends/FriendForm';


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
        <h1>My Friends List</h1>
        <Route path={'/'} render={props => {
          return <FriendsList {...props} fr={this.state.fr} />        
        }        
      }
      />
      <FriendForm />
    </div>
  );
  }
}

export default App;
