import React from 'react';
import Friends from './Friends';
import { Link } from 'react-router-dom';

const FriendsList = props => {
    return(
        <div>
            [LIST]
            <ul>
                <li>
                   <Link to={'/'}>Home</Link> 
                </li>
                <li>
                    <Link to={'/friends'}>Friends</Link>
                </li>
            </ul>
            <Friends data={props.fr} />
        </div>
    );
};
export default FriendsList;