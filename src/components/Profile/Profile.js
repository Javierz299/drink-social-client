import React, { useEffect } from 'react';
import AuthCallBack from '../AuthCallBack/AuthCallBack';
import { useSelector, useDispatch } from 'react-redux';
import BeerCarousel from '../DrinkCarousels/BeerCarousel/BeerCarousel';
import WineCarousel from '../DrinkCarousels/WineCarousel/WineCarousel';
import LiquorCarousel from '../DrinkCarousels/LiquorCarousel/LiquorCarousel';
import CocktailCarousel from '../DrinkCarousels/CocktailCarousel/CocktailCarousel';
import BingeCarousel from '../DrinkCarousels/BingeCarousel/BingeCarousel';

import './profile.css';

import axios from 'axios';
import config from '../../config';
import { DB_USER_ID } from '../../store/actions/action_types';

const ProtectedRoute = () => {
    const profile = useSelector(profile => profile.auth_reducer.profile);   
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);

    const dispatch = useDispatch();
    useEffect( () => {
        const newProfile = {};
        if(!profile){
           return console.log("NO PROFILE YET")
        } else {
            console.log('PROFILE READY')
            let tempName = profile.name.substring(0,profile.name.indexOf("@"));
            newProfile.name = tempName || profile.name;
            newProfile.email = profile.email;
        }

        
           axios.post(`${config.API_ENDPOINT}/post/userprofile`,newProfile)
           //once profile updates. we fetch our users id from db.
           if(profile){
               setTimeout(() => {
                axios.get(`${config.API_ENDPOINT}/get/userid/${newProfile.email}`)
                .then((res) => dispatch({type: DB_USER_ID, payload: res.data.id}))
               }, 500);//delay for initial post of new user and getting id. need time to set new user in db before fetching id.
           }
   
       console.log('profile',newProfile,dbUserId)
    
    }, [profile,dbUserId])//useEffect will re-render once there is a change
    
    return (
        <div id="profile-container" >
            {/*add different spinner for loading profile currently set as authcallback */
            !dbUserId ? <AuthCallBack /> :
            <div className="profile-container-description" >
                <img onClick={() => console.log("show total number of drinks")} src={profile.picture} alt="pic" />
                <h3>{
                profile.name.substring(0,profile.name.indexOf("@")) ||
                profile.name
                }</h3>
                
                   {console.log("profile",profile)}
                <div>
                    <BeerCarousel />
                    <br/>
                    <CocktailCarousel />
                    <br/>
                    <WineCarousel />
                    <br/>
                    <LiquorCarousel />
                    <br/>
                    <BingeCarousel />
                </div>
            </div>
            }
            {/* details of drinks*/}
   
        </div>
    )
}

export default ProtectedRoute;
