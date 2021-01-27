import React from 'react';
import AuthCallBack from '../AuthCallBack/AuthCallBack';
import { useSelector } from 'react-redux';
import MainNavButtons from '../MainNavButtons/MainNavButtons'

import './profile.css';

const ProtectedRoute = () => {
    const profile = useSelector(profile => profile.auth_reducer.profile)
    
    return (
        <div id="profile-container" >
            <MainNavButtons />
            {/*add different spinner for authcallback */
            !profile ? <AuthCallBack /> :
            <div className="profile-container-description" >
                <img src={profile.picture} alt="pic" />
                <h3>{profile.name}</h3>
                {/* <h4>{profile.email.substring(0,profile.email.indexOf("@"))}</h4> */}
                
                   {console.log("profile",profile)}
            </div>
            }
            {/* details of drinks*/}
            {/* forms for drinks, aiming for carousol*/}

            
        </div>
    )
}

export default ProtectedRoute
