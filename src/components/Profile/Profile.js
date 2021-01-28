import React, { useEffect } from 'react';
import AuthCallBack from '../AuthCallBack/AuthCallBack';
import { useSelector } from 'react-redux';

import './profile.css';

import axios from 'axios';
import config from '../../config';

const ProtectedRoute = () => {
    const profile = useSelector(profile => profile.auth_reducer.profile);

    useEffect(() => {
        //if name includes @ get substring
        const newProfile = {};
        if(!profile){
           return console.log("NO PROFILE YET")
        } else {
            console.log('PROFILE READY')
            let tempName = profile.name.substring(0,profile.name.indexOf("@"));
            newProfile.name = tempName || profile.name;
            newProfile.email =profile.email;
        }
        axios.post(`${config.API_ENDPOINT}/post/userprofile`,newProfile)
            .then(res => console.log('RESPONSE',res));
        
    }, [profile])
    
    return (
        <div id="profile-container" >
            {/*add different spinner for authcallback */
            !profile ? <AuthCallBack /> :
            <div className="profile-container-description" >
                <img src={profile.picture} alt="pic" />
                <h3>{
                profile.name.substring(0,profile.name.indexOf("@")) ||
                profile.name
                }</h3>
                
                   {console.log("profile",profile)}
            </div>
            }
            {/* details of drinks*/}
            {/* forms for drinks, aiming for carousol*/}

            
        </div>
    )
}

export default ProtectedRoute;
