import React, { useState } from 'react';

import UserList from '../UserList/UserList';

import axios from 'axios';
import config from '../../config';

const Friend = () => {
    const [users, setUsers] = useState("")

    const handleFriendSearch = (e) => {
        e.preventDefault();
        let search = e.target.value;
        console.log("submitted",e.target.value)

        if(!search) return;

        axios.get(`${config.API_ENDPOINT}/get/friend/${search}`)
        .then(res => setUsers(res.data))
    }

    return (
        <div>
            <input type="text" 
            placeholder="search friends"
            onChange={handleFriendSearch} />
            <div>
                <UserList users={users} />
            </div>
        </div>
    )
}

export default Friend
