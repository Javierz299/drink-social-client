import React, { useState } from 'react';

import axios from 'axios';
import config from '../../config';

const Friend = () => {

    const handleFriendSearch = (e) => {
        e.preventDefault();
        let search = e.target.value;
        console.log("submitted",e.target.value)

        if(!search) return;

        axios.get(`${config.API_ENDPOINT}/get/friend/${search}`)
        .then(res => console.log("get friend",res.data))
    }

    return (
            <input type="text" 
            placeholder="search friends"
            onChange={handleFriendSearch} />
    )
}

export default Friend
