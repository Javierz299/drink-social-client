import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

const PendingRequest = () => {
    const pendingRequests = useSelector(pending => pending.pending_reducer.pending_requests)

    return (
        <div>
            <Link to="/friends">friends</Link>
            <Link to="/profile">Profile</Link>
            <div>
                {pendingRequests.length < 1 && <h3>no pending requests</h3>}
               {pendingRequests.map((pending,i) => (
                   //if user declines delete request from db
                   <li key={i} >{pending.user} <button onClick={() => console.log("add", pending.user)}>add</button><button>decline</button></li>
               ))}
            </div>
        </div>
    )
}

export default PendingRequest
