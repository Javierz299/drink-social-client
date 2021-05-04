import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import config from '../../config';
import axios from 'axios'
import { GET_FRIENDS, PENDING_REQUESTS } from '../../store/actions/action_types';

const FriendsList = () => {
    const dispatch = useDispatch();
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);
    const friendsList = useSelector(friend => friend.friend_reducer.friends_list);

    useEffect(() => {
        console.log('dbUserId',dbUserId)
            axios.get(`${config.API_ENDPOINT}/get/pending/${dbUserId.username}`)
            .then(res => dispatch({type: PENDING_REQUESTS, payload: res.data}))

            axios.get(`${config.API_ENDPOINT}/get/friend/list/${dbUserId.username}`)
            .then(res => dispatch({type: GET_FRIENDS, payload: res.data}));
    },[])

    return (
        <div>
            <div>
                {/*make small modal for number of requests*/}
                <Link to="/pending">Pending</Link>
                <Link to="/profile">Profile</Link>
            </div>
                friends list
                {!friendsList ? console.log("no friends yet") :
                    friendsList.map(friend => (
                        <li key={friend.id}>{friend.username}</li>
                    ))
                }
        </div>
    )
}

export default FriendsList
