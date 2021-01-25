import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
const MainNavButtons = (props) => {
    const state = useSelector(state => state.auth_reducer.is_authenticated)
    console.log("AUTH",props.auth)
    const dispatch = useDispatch()

    const log_out = () => {
        props.auth.logout();
        dispatch({type: "LOG_OUT"});
    }

    return (
        <div>
            {state ? 
            <button onClick={() => log_out()} >Log Out</button> :
            <button onClick={() => props.auth.login()} >Log In</button>
            }
            <Link to="/privateroute">Private Route</Link>
        </div>
    )
}

export default MainNavButtons;
