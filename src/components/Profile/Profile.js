import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BeerCarousel from '../DrinkCarousels/BeerCarousel/BeerCarousel';
import WineCarousel from '../DrinkCarousels/WineCarousel/WineCarousel';
import LiquorCarousel from '../DrinkCarousels/LiquorCarousel/LiquorCarousel';
import CocktailCarousel from '../DrinkCarousels/CocktailCarousel/CocktailCarousel';
import BingeCarousel from '../DrinkCarousels/BingeCarousel/BingeCarousel';

import ProfileDetails from '../ProfileDetails/ProfileDetails';
import { IntialProfilePost } from '../InitialProfilePost/InitialProfilePost';

import { initialBeerPost, initialCocktailPost } from '../../LiquorStore/DrinkCarouselValues';
import { initialWinePost, initialLiquorPost } from '../../LiquorStore/DrinkCarouselValues';
import { initialBingePost } from '../../LiquorStore/DrinkCarouselValues';

import guestPic from '../../FormPicutres/beerpics/beer.png'
import './profile.css';

import Loading from '../Spinner/spinner';

import axios from 'axios';
import config from '../../config';

import { addAllDrinks } from '../../utils/addAllDrinks/addAllDrinks'
import { DB_USER_ID, GET_ALL_DRINK_VALUES, TOTAL_OF_ALL_DRINKS } from '../../store/actions/action_types';
import DisplayName from '../DispalyName/DisplayName';
import DrinkUpdate from '../DrinkUpdate/DrinkUpdate';

const ProtectedRoute = () => {
    const guest = useSelector(guest => guest.user_reducer.guest_login)
    const [details, toggleDetails] = useState(false)
    const profile = useSelector(profile => profile.auth_reducer.profile);   
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);
    const userDrinkAmount = useSelector(userDrinkAmount => userDrinkAmount.user_reducer.totalOfAllDrinks);
    const dispatch = useDispatch();

    useEffect( () => {
        //send an intial post for all drink tables here?
        //once user goes to profile route we'll send it
        const newProfile = {};
        if(!profile){
           return;// console.log("NO PROFILE YET")
        } else {
            //console.log('PROFILE READY')
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
               }, 1400);//**extended from 500ms to 1.4sec, to show loading screen**
                        //delay for initial post of new user and getting id. 
                        //need time to set new user in db before fetching id.
           }

        //we wait to get user id to make our initial post for user
        if(dbUserId){
                //get all drinks from user if any, if not post initial values for all
                axios.get(`${config.API_ENDPOINT}/get/allDrinks/${dbUserId}`)
                .then(res => {
                    // while fetching if we get back empty obj, means first time signed up
                    // no initial values
                    if(JSON.stringify(res.data) === "{}"){
                        //console.log("else post initila values")
                        const beerPost = axios.post(`${config.API_ENDPOINT}/post/userBeerItem`,{ user_id: dbUserId, ...initialBeerPost})
                        const cocktailPost = axios.post(`${config.API_ENDPOINT}/post/userCocktailItem`,{ user_id: dbUserId, ...initialCocktailPost})
                        const winePost = axios.post(`${config.API_ENDPOINT}/post/userWineItem`,{ user_id: dbUserId, ...initialWinePost})
                        const liquorPost = axios.post(`${config.API_ENDPOINT}/post/userLiquorItem`,{ user_id: dbUserId, ...initialLiquorPost})
                        const bingePost = axios.post(`${config.API_ENDPOINT}/post/userBingeItem`,{ user_id: dbUserId, ...initialBingePost})
                        return axios.all([beerPost,cocktailPost,winePost,liquorPost,bingePost])
                    } else {
                        //else if we get back data, store in state
                        dispatch({type: GET_ALL_DRINK_VALUES, payload: res.data})
                        const totalDrinks = addAllDrinks(res.data)
                        dispatch({type: TOTAL_OF_ALL_DRINKS, payload: totalDrinks})
                    }
                });
            };
       
            
    }, [profile,dbUserId,userDrinkAmount])//useEffect will re-render once there is a change
    
    return (
        <div id="profile-container" >
            { !dbUserId && !guest ? <Loading /> :
                <div className="profile-container-description" >
                    {!details ? 
                    <div className="profile-description">
                        <small>click image</small>
                        <img className="profile-img"
                         onClick={() => toggleDetails(!details)} src={guest ? guestPic : profile.picture} alt="pic"
                          />
                        <DisplayName />
                        <DrinkUpdate />
                    </div> : 
                    <ProfileDetails toggleDetails={toggleDetails}/>
                    }
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
        </div>
    )
}

export default ProtectedRoute;
