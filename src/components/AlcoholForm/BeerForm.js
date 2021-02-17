import React from 'react';
import config from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTION_TYPES from '../../store/actions/action_types';

import axios from 'axios';

import './alcoholForm.css'
const BeerForm = () => {
   
    //const profile = useSelector(profile => profile.auth_reducer.profile);
    const dbUserId = useSelector(id => id.auth_reducer.dbUserId);
    const userDrinkItem = useSelector(userDrinkItem => userDrinkItem.user_reducer.drink_item[0]);
    const userDrinkMessage = useSelector(userDrinkMessage => userDrinkMessage.user_reducer.drink_item[1]);
    //const userDrinkAmount = useSelector(userDrinkItem => userDrinkItem.user_reducer.drink_item[2]);
    const dispatch = useDispatch();

    const handlePostDrink = () => {
        dispatch({type: ACTION_TYPES.SUBMIT_BEER_DRINK, payload: false});
        axios.patch(`${config.API_ENDPOINT}/patch/beer`,{dbUserId,userDrinkItem});
        dispatch({type: ACTION_TYPES.TOTAL_OF_ALL_DRINKS, payload: +1})
        console.log("userdrink item",userDrinkItem)
        dispatch({type: ACTION_TYPES.SET_LAST_DRINK_ITEM, payload: userDrinkItem})
        localStorage.setItem("last",(userDrinkItem))
    };

    const handleDrink = () => {
        dispatch({type: ACTION_TYPES.SUBMIT_BEER_DRINK, payload: false});
    };

    return (
        <div className="alcoholForm">
            <h6><span className="drink_disclaimer">**Don't drink and drive!**</span></h6>
            <h4>{userDrinkMessage}</h4>
            <div className="form-confirmation-buttons">
                <button className="form-cancel" onClick={() => handleDrink()}>cancel</button>
                <button className="form-add" onClick={() => handlePostDrink()}>Add Drink</button>
            </div>
        </div>
    )
}

export default BeerForm;
