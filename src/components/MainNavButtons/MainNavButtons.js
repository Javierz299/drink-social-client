import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import './mainNavButtons.css';

const MainNavButtons = (props) => {
    let [toggle, setToggle] = useState(false);
    const state = useSelector(state => state.auth_reducer.is_authenticated);
    const dispatch = useDispatch();

    const log_out = () => {
        props.auth.logout();
        dispatch({type: "LOG_OUT"});
    }

    const profile = useSelector(profile => profile.auth_reducer.profile);
    console.log("profile in mainNavButtons",profile)
    console.log("state in mainNavButtons",state)


    return (
        <div id="main-nav-container">
           <div id="main-nav-buttons">
                <span><Link to="/">Home</Link></span>
                <span><Link to="/stats">Stats</Link></span>
                <span><Link to="/profile">Profile</Link></span>
                {state ? 
                <span onClick={() => log_out()} >Log Out</span> :
                <span onClick={() => props.auth.login()} >Log In</span>
                }
            </div>
            <div onMouseEnter={() => setToggle(!toggle)}
                 onMouseLeave={() => setToggle(!toggle)}
                 className="main-nav-menu">
                Menu
                <div className={toggle ? "main-nav-show" : "main-nav-hide"}>
                    <span><Link to="/">Home</Link></span>
                    <span><Link to="/stats">Stats</Link></span>
                    <span><Link to="/profile">Profile</Link></span>
                    {state ? 
                    <span onClick={() => log_out()} >Log Out</span> :
                    <span onClick={() => props.auth.login()} >Log In</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default MainNavButtons;
