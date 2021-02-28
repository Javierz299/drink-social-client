import React, { useEffect, useState } from 'react';
import AuthCallBack from '../AuthCallBack/AuthCallBack';
import { useSelector, useDispatch } from 'react-redux';

import BeerCarousel from '../DrinkCarousels/BeerCarousel/BeerCarousel';
import WineCarousel from '../DrinkCarousels/WineCarousel/WineCarousel';
import LiquorCarousel from '../DrinkCarousels/LiquorCarousel/LiquorCarousel';
import CocktailCarousel from '../DrinkCarousels/CocktailCarousel/CocktailCarousel';
import BingeCarousel from '../DrinkCarousels/BingeCarousel/BingeCarousel';

import ProfileDetails from '../ProfileDetails/ProfileDetails';

import { initialBeerPost, initialCocktailPost } from '../../LiquorStore/DrinkCarouselValues';
import { initialWinePost, initialLiquorPost } from '../../LiquorStore/DrinkCarouselValues';
import { initialBingePost } from '../../LiquorStore/DrinkCarouselValues';

import guestPic from '../../FormPicutres/beerpics/beer.png'
import './profile.css';

import axios from 'axios';
import config from '../../config';

import { addAllDrinks } from '../../utils/addAllDrinks/addAllDrinks'
import { DB_USER_ID, GET_ALL_DRINK_VALUES, TOTAL_OF_ALL_DRINKS } from '../../store/actions/action_types';

const ProtectedRoute = () => {
    const guest = useSelector(guest => guest.user_reducer.guest_login)
    const [details, toggleDetails] = useState(false)
    const profile = useSelector(profile => profile.auth_reducer.profile);   
    const dbUserId = useSelector(dbUserId => dbUserId.auth_reducer.dbUserId);
    const combinedDrinks = useSelector(combinedDrinks => combinedDrinks.user_reducer.totalOfAllDrinks);
    const lastDrinkItem = useSelector(lastDrinkItem => lastDrinkItem.user_reducer.lastDrinkItem);
    const dispatch = useDispatch();

    useEffect( () => {
        //send an intial post for all drink tables here?
        //once user goes to profile route we'll send it
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
               }, 600);//delay for initial post of new user and getting id. 
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
                        console.log("else post initila values")
                        const beerPost = axios.post(`${config.API_ENDPOINT}/post/userBeerItem`,{ user_id: dbUserId, ...initialBeerPost})
                        const cocktailPost = axios.post(`${config.API_ENDPOINT}/post/userCocktailItem`,{ user_id: dbUserId, ...initialCocktailPost})
                        const winePost = axios.post(`${config.API_ENDPOINT}/post/userWineItem`,{ user_id: dbUserId, ...initialWinePost})
                        const liquorPost = axios.post(`${config.API_ENDPOINT}/post/userLiquorItem`,{ user_id: dbUserId, ...initialLiquorPost})
                        const bingePost = axios.post(`${config.API_ENDPOINT}/post/userBingeItem`,{ user_id: dbUserId, ...initialBingePost})
                        return axios.all([beerPost,cocktailPost,winePost,liquorPost,bingePost])
                    } else {
                        //else if we get back data, store in state
                        console.log("else")
                        dispatch({type: GET_ALL_DRINK_VALUES, payload: res.data})
                        const totalDrinks = addAllDrinks(res.data)
                        dispatch({type: TOTAL_OF_ALL_DRINKS, payload: totalDrinks})
                    }
                });
            };
       //console.log('profile',newProfile,dbUserId,allDrinks,combinedDrinks);
       console.log('LAST DRINK ITEM',lastDrinkItem)
    }, [profile,dbUserId,combinedDrinks])//useEffect will re-render once there is a change
    // need to make seperate components "profile-container-description"
    // & need it to work for guest
    return (
        <div id="profile-container" >
            { !dbUserId && !guest ? <AuthCallBack /> :
                <div className="profile-container-description" >
                    {!details ? 
                    <div className="profile-description">
                        <small>click the image</small>
                        <img className="profile-img"
                         onClick={() => toggleDetails(!details)} src={guest ? guestPic : profile.picture} alt="pic"
                          />
                        <h3>
                            {guest ? "guest" :
                            profile.name.substring(0,profile.name.indexOf("@")) ||
                            profile.name
                            }
                        </h3>
                        {/* <div>Friends: none</div> */}
                        <div>Drinks: {combinedDrinks ? combinedDrinks : 0}</div>
                        <div>last drink: {!lastDrinkItem ? localStorage.getItem("last") : lastDrinkItem}</div>
                        <div>{!localStorage.getItem("post") ? "none" : localStorage.getItem("post").slice(0,21)}</div>
                        {/* <div>Total Value: 0</div> */}
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
