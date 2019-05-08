import React from 'react';

const AddFriendForm = props => {
    return(
        <div>
          <form>
              <input>Add friend</input>
          </form>
          <button>Add</button>
          <form>
              <input>Delete Friend</input>
              <button>Delete</button>
          </form>          
        </div>
    );
};
export default AddFriendForm;