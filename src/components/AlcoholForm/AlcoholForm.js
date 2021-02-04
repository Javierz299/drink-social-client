import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import liquorStore from '../../LiquorStore/LiquorStore';
import { SUBMIT_DRINK } from '../../store/actions/action_types';

import './alcoholForm.css'
const AlcoholForm = () => {
    const userDrinkItem = useSelector(userDrinkItem => userDrinkItem.user_reducer.drink_item[0]);
    const userDrinkMessage = useSelector(userDrinkMessage => userDrinkMessage.user_reducer.drink_item[1]);
    const dispatch = useDispatch();

    const handlePostDrink = () => {
        console.log("beer me clicked",userDrinkItem)
        dispatch({type: SUBMIT_DRINK, payload: false})
        //post route
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
