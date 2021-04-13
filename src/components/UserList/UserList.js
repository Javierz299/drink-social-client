import React from 'react';
import { useSelector } from 'react-redux';

import config from '../../config';

import axios from 'axios';

const UserList = ({users}) => {
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);
    const { id, username } = dbUserId
    console.log("users",users)
    console.log('profile',id,username)
   const sendFriendRequest = (addUser) => {
        console.log("adduser",addUser)
    axios.post(`${config.API_ENDPOINT}/post/friend/request`,{id, username, addUser})
        .then(res => console.log('friend request',res.data))

    }   


    return (
        <div>
            {users && users.map(user => (
                <li key={user.id}>
                    {user.username}
                    <button onClick={() => sendFriendRequest(user)}>
                        add
                    </button>
                </li>
            ))}
        </div>
    )
}

export default UserList
