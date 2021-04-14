import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'

const FriendsList = () => {
    //fetch friends
    //fetch pending



    return (
        <div>
            <div>
                {/*make small modal for number of requests*/}
                <Link to="/pending">pending request</Link>
            </div>
            List of Friends
        </div>
    )
}

export default FriendsList
