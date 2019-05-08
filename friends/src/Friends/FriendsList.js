import React from 'react';
import Friends from './Friends';
import { Link } from 'react-router-dom';

const FriendsList = props => {
    const friends = props.friends;
    
    return(
        <div>
            <ul>
                <li>
                    <Link to={'/friends'}>Friends</Link>
                </li>
            </ul>
            <Friends data={props.fr} />
        </div>
    );
};
export default FriendsList;