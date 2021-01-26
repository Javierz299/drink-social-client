import React from 'react';
import AuthCallBack from '../AuthCallBack/AuthCallBack';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const profile = useSelector(profile => profile.auth_reducer.profile)
    
    return (
        <div>
            {!profile ? <AuthCallBack /> :
            <div>
            Profile
            <h3>{profile.name}</h3>
            <h4>{profile.email.substring(0,profile.email.indexOf("@"))}</h4>
            <img src={profile.picture} alt="pic" />
                   {console.log("profile",profile)}
            </div>
            }
            
        </div>
    )
}

export default ProtectedRoute
