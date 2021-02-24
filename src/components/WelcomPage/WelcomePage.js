import React from 'react';
import { GUEST_LOGIN } from '../../store/actions/action_types';
import { useDispatch } from 'react-redux';

const WelcomePage = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Welcome to Drink Social</h1>
            <button onClick={() => dispatch({type: GUEST_LOGIN})}>
                Guest Login
            </button>   
        </div>
    )
};

export default WelcomePage;
