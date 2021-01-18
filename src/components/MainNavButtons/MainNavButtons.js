import React from 'react';
import Auth from '../../utils/auth';

const auth = new Auth();

const MainNavButtons = () => {
    


    return (
        <div>
            <button onClick={() => auth.login()} >Log In</button>
        </div>
    )
}

export default MainNavButtons;
