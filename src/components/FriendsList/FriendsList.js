import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import config from '../../config';
import axios from 'axios'

const FriendsList = () => {
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);

    //fetch friends
    //fetch pending

    useEffect(() => {
        //axios.get(`${config.API_ENDPOINT}/get/pending/${dbUserId.username}`)
        
    },[])

    return (
        <div>
            <div>
                {/*make small modal for number of requests*/}
                <Link to="/pending">Pending</Link>
                <Link to="/profile">Profile</Link>
            </div>
            List of Friends
        </div>
    )
}

export default FriendsList
