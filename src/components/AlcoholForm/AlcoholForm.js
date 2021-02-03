import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import liquorStore from '../../LiquorStore/LiquorStore';
import { SUBMIT_DRINK } from '../../store/actions/action_types';

import './alcoholForm.css'
const AlcoholForm = (item) => {
    const userDrinkItem = useSelector(userDrinkItem => userDrinkItem.user_reducer.drink_item);
    const dispatch = useDispatch();
    const handlePostDrink = () => {
        console.log("beer me clicked")
        dispatch({type: SUBMIT_DRINK, payload: false})
    }
    return (
        <div className="alcoholForm">
            <h1>Drinking a {userDrinkItem}, noice!</h1>
            <button>nope</button>
            <button onClick={() => handlePostDrink()}>beer me</button>
        </div>
    )
}

export default AlcoholForm
