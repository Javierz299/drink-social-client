import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';

import './mainNavButtons.css';

const MainNavButtons = (props) => {
    let [toggle, setToggle] = useState(false);
    const isAuthenticated = useSelector(isAuthenticated => isAuthenticated.auth_reducer.is_authenticated);
    const dispatch = useDispatch();
    const history = useHistory();

    const log_out = () => {
        props.auth.logout();
        dispatch({type: "LOG_OUT"});
        history.push("/")
    }
    
    return (
        <div id="main-nav-container">
           <div id="main-nav-buttons">
                <span><Link className="nav-link" to="/">Home</Link></span>
                <span><Link className="nav-link" to="/public">Public</Link></span>
                <span><Link className="nav-link" to="/profile">Profile</Link></span>
                {isAuthenticated ? 
                <span className="log_in_out" 
                onClick={() => log_out()} >Log Out</span> :
                <span className="log_in_out" 
                onClick={() => props.auth.login()} >Log In</span>
                }
            </div>
            <div onMouseEnter={() => setToggle(!toggle)}
                 onMouseLeave={() => setToggle(!toggle)}
                 className="main-nav-menu">
                    Menu
            </div>
                <div className={toggle ? "main-nav-show" : "main-nav-hide"}>
                    <Link className="nav-link" to="/">
                        <span>Home</span>
                    </Link>
                    <Link className="nav-link" to="/public">
                    <span>Public</span>
                    </Link>
                    <Link className="nav-link" to="/profile">
                    <span>Profile</span>
                    </Link>
                    {isAuthenticated ? 
                    <span className="log_in_out" onClick={() => log_out()} >Log Out</span> :
                    <span className="log_in_out" onClick={() => props.auth.login()} >Log In</span>
                    }
                </div>
            
        </div>
    )
}

export default MainNavButtons;
