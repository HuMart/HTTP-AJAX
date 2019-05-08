import React from 'react';
import './App.css';
import axios from 'axios';
import { Route } from 'react-router-dom';  
import Home from './Friends/Home';
import Friends from './Friends/Friends';

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
      this.setState({ fr: res.data });
    })
    .catch(err => console.err("err", err));
}

  render() {
  return (
    <div className="App">
      <Route exact path={'/'} component={Home} />
      <Route path={'/friends'} render={props => {
        return <Friends {...props} fr={this.state.fr} />
      }}
      />
    </div>
  );
  }
}

export default App;
