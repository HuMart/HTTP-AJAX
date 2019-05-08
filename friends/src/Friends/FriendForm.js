import React from 'react';

class FriendForm extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            friendInfo: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

handleChange = e => {
    e.preventDefault();
    this.setState({
        friendInfo: {
            ...this.state.friendInfo,
            [e.target.name]: e.target.value
        }
    });
};


    render() {
      return(
        <div className="friend-form">
            <h1>Add a New Friend</h1>
            <form onSubmit="">
                <input 
                  type="text" 
                  name="" 
                  placeholder="Add Name"
                  value={this.state.friendInfo.name} />
                <input 
                  type="text"
                  name=""
                  placeholder="Add Age"
                  value={this.state.friendInfo.age}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Email"
                  value={this.state.friendInfo.email}
                />
                <button className="" type="">Add Friend</button>
            </form>                 
          </div>
        )
    }
};
export default FriendForm;