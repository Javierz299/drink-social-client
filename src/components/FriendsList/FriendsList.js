import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import config from '../../config';
import axios from 'axios'
import { PENDING_REQUESTS } from '../../store/actions/action_types';

const FriendsList = () => {
    const dispatch = useDispatch();
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);
    //fetch friends
    //fetch pending

    useEffect(() => {
        console.log('dbUserId',dbUserId)
            axios.get(`${config.API_ENDPOINT}/get/pending/${dbUserId.username}`)
            .then(res => dispatch({type: PENDING_REQUESTS, payload: res.data}))
    },[])

    return (
        <div>
            <div>
                {/*make small modal for number of requests*/}
                <Link to="/pending">Pending</Link>
                <Link to="/profile">Profile</Link>
            </div>
                friends list
        </div>
    )
}

export default FriendsList
