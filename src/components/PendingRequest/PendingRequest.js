import React, { useEffect, useState } from 'react';

import config from '../../config';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { PENDING_REQUESTS } from '../../store/actions/action_types';

const PendingRequest = () => {
    const pendingRequests = useSelector(pending => pending.pending_reducer.pending_requests);
    const dispatch = useDispatch();

    const addFriendRequest = (addUser) => {
        console.log("adduser",addUser)
        axios.patch(`${config.API_ENDPOINT}/add/friend`,addUser)
            .then(res => console.log("patch result",res))
        
        alert(`Request sent to ${addUser.user}`);

        const filterdRequest = pendingRequests.filter((user) => user.user !== addUser.user);
        dispatch({type: PENDING_REQUESTS, payload: filterdRequest})
    };

    console.log("pending Requests",pendingRequests);
    return (
        <div>
            <Link to="/friends">friends</Link>
            <Link to="/profile">Profile</Link>
            <div>
                {!pendingRequests.length  && <h3>no pending requests</h3>}
                { JSON.stringify(pendingRequests) !== "{}" && pendingRequests.map((pending,i) => (// error when empty; {}
                   //if user declines delete request from db
                   <li key={i} >{pending.user} 
                        <button onClick={() => addFriendRequest(pending)}>add</button>
                        <button>decline</button>
                    </li>
               ))}
            </div>
        </div>
    )
}

export default PendingRequest
