import React from 'react';
import config from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import { SUBMIT_DRINK } from '../../store/actions/action_types';

import axios from 'axios';

import './alcoholForm.css'
const AlcoholForm = () => {
    const profile = useSelector(profile => profile.auth_reducer.profile);
    const userDrinkItem = useSelector(userDrinkItem => userDrinkItem.user_reducer.drink_item[0]);
    const userDrinkMessage = useSelector(userDrinkMessage => userDrinkMessage.user_reducer.drink_item[1]);
    const userDrinkAmount = useSelector(userDrinkItem => userDrinkItem.user_reducer.drink_item[2]);
    const dispatch = useDispatch();

    const handlePostDrink = () => {
        console.log("beer me clicked",userDrinkItem)
        const userSubmission = {email: profile.email, drink: userDrinkItem, amount: userDrinkAmount}
        dispatch({type: SUBMIT_DRINK, payload: false})
        console.log('USER SUBMISSION',userSubmission)
        // axios.post(`${config.API_ENDPOINT}/post/userDrinkItem`,userSubmission)
        //     .then(res => console.log())
    }

    const handleDrink = () => {
        dispatch({type: SUBMIT_DRINK, payload: false})
    }

    return (
        <div className="alcoholForm">
            <h6>Don't drink and drive!</h6>
            <h4>{userDrinkMessage}</h4>
            <button onClick={() => handleDrink()}>cancel</button>
            <button onClick={() => handlePostDrink()}>Add Drink</button>
        </div>
    )
}

export default AlcoholForm
