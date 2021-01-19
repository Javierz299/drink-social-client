import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const MainNavButtons = (props) => {
    const state = useSelector(state => state.auth_reducer.is_authenticated)
    console.log('state',state)
    return (
        <div>
            {state ?
            <button onClick={() => props.auth.logout()} >Log Out</button> :
            <button onClick={() => props.auth.login()} >Log In</button>
            }
            <Link to="/privateroute">Private Route</Link>
        </div>
    )
}

export default MainNavButtons;
