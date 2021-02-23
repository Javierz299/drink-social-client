import React from 'react';
import { useSelector } from 'react-redux';

const ProfileDetails = () => {
    const allDrinks = useSelector(allDrinks => allDrinks.user_reducer.allDrinkValues);
    console.log("ALL DRINKS",allDrinks)
    return (
        <div>
            
        </div>
    )
}

export default ProfileDetails
