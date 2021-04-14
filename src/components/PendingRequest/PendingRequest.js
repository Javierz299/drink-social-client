import React from 'react';
import { Link } from 'react-router-dom';

const PendingRequest = () => {
    return (
        <div>
            <Link to="/friends">friends</Link>
            <Link to="/profile">Profile</Link>
            <div>
                pending list
            </div>
        </div>
    )
}

export default PendingRequest
