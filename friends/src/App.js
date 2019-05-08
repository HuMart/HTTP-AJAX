import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
 constructor() {
   super();
   this.state = {
     friends: []
   };
 }


componentDidMount() {
  axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log('res',res);
      this.setState({ friends: res.data });
    });
}

  render() {
  return (
    <div className="App">
      
    </div>
  );
  }
}

export default App;
