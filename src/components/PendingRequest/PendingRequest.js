import React from 'react';

import config from '../../config';
import axios from 'axios';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const PendingRequest = () => {
    const pendingRequests = useSelector(pending => pending.pending_reducer.pending_requests)

    const addFriendRequest = (addUser) => {
        console.log("adduser",addUser)
        axios.patch(`${config.API_ENDPOINT}/add/friend`,addUser)
            .then(res => console.log("patch result",res))
    }

    return (
        <div>
            <Link to="/friends">friends</Link>
            <Link to="/profile">Profile</Link>
            <div>
                {!pendingRequests.length && <h3>no pending requests</h3>}
                {pendingRequests.map((pending,i) => (
                   //if user declines delete request from db
                   <li key={i} >{pending.user} <button onClick={() => addFriendRequest(pending)}>add</button><button>decline</button></li>
               ))}
            </div>
        </div>
    )
}

export default PendingRequest
