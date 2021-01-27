import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import './mainNavButtons.css';

const MainNavButtons = (props) => {
    const state = useSelector(state => state.auth_reducer.is_authenticated)
    console.log("AUTH",props.auth)
    const dispatch = useDispatch()

    const log_out = () => {
        props.auth.logout();
        dispatch({type: "LOG_OUT"});
    }

    return (
        <div id="main-nav-buttons">
           
            <span><Link to="/">Home</Link></span>
            <span><Link to="/stats">Stats</Link></span>
            <span><Link to="/profile">Profile</Link></span>
            {state ? 
            <span onClick={() => log_out()} >Log Out</span> :
            <span onClick={() => props.auth.login()} >Log In</span>
            }
        </div>
    )
}

export default MainNavButtons;
