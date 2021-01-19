import React from 'react';
import { Link } from 'react-router-dom';
const MainNavButtons = (props) => {
    

    return (
        <div>
            <button onClick={() => props.auth.login()} >Log In</button>
            <Link to="/privateroute">Private Route</Link>
        </div>
    )
}

export default MainNavButtons;
