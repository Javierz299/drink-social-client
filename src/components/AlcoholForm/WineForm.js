import React from 'react';
import config from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTION_TYPES from '../../store/actions/action_types';
import { date } from '../../utils/lastPost/lastPost'


import axios from 'axios';

import './alcoholForm.css'
const WineForm = () => {
    //const profile = useSelector(profile => profile.auth_reducer.profile);
    const dbUserId = useSelector(id => id.auth_reducer.dbUserId);
    const userDrinkItem = useSelector(userDrinkItem => userDrinkItem.user_reducer.drink_item[0]);
    const userDrinkMessage = useSelector(userDrinkMessage => userDrinkMessage.user_reducer.drink_item[1]);
    const userDrinkAmount = useSelector(userDrinkAmount => userDrinkAmount.user_reducer.totalOfAllDrinks);
    const dispatch = useDispatch();

    const handlePostDrink = () => {
        localStorage.setItem("last",(userDrinkItem));
        localStorage.setItem('post', date);

        dispatch({type: ACTION_TYPES.SUBMIT_WINE_DRINK, payload: false})
        axios.patch(`${config.API_ENDPOINT}/patch/wine`,{dbUserId,userDrinkItem})
        dispatch({type: ACTION_TYPES.TOTAL_OF_ALL_DRINKS, payload: userDrinkAmount +1})
    }

    const handleDrink = () => {
        dispatch({type: ACTION_TYPES.SUBMIT_WINE_DRINK, payload: false})
    }

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

export default WineForm;
