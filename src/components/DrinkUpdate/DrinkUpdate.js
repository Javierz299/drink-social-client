import React, {Fragment} from 'react';
import { useSelector } from 'react-redux';

const DrinkUpdate = () => {
    const combinedDrinks = useSelector(combinedDrinks => combinedDrinks.user_reducer.totalOfAllDrinks);
    const lastDrinkItem = useSelector(lastDrinkItem => lastDrinkItem.user_reducer.lastDrinkItem);
    return (
        <Fragment>
        {/* <div>Friends: none</div> */}
        <div>Drinks: {combinedDrinks ? combinedDrinks : 0}</div>
        <div>last drink: {!lastDrinkItem ? localStorage.getItem("last") : lastDrinkItem}</div>
        <div>{!localStorage.getItem("post") ? "none" : localStorage.getItem("post").slice(0,21)}</div>
        {/* <div>Total Value: 0</div> */}
        </Fragment>
    )
}

export default DrinkUpdate
