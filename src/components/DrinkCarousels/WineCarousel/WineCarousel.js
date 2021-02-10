import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import WineForm from '../../AlcoholForm/WineForm';
import liquorStore from '../../../LiquorStore/LiquorStore';

import { Card } from 'react-bootstrap';

import '../BeerCarousel/beerForm.css';

const Wine = () => {
    const submitWineDrink = useSelector(submitWineDrink => submitWineDrink.user_reducer.submit_wine_drink_form)
    const dispatch = useDispatch();

   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1440, itemsToShow: 5 },
   ]

   const sendDrinkItem = (e) => {
    dispatch({type: "SUBMIT_WINE_DRINK", payload: true})
       const item = e.target.id;
        const drinkItem = liquorStore[item];
        dispatch({type: "DRINK_ITEM", payload: drinkItem}) 
   }
   //pagination={false} to carousel to remove dots. 
   //And showArrows={false}
        return (
            <div className="carousel-container">
                {submitWineDrink ? <WineForm /> :
                    <Carousel breakPoints={breakPoints}>
                    <div>
                    <h3>red wine</h3>
                    <Card>        
                    <button id="27" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        red wine
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>white wine</h3>
                    <Card>        
                    <button id="28" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        white wine
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>sangria</h3>
                    <Card>        
                    <button id="29" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        san gria
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>champagne</h3>
                    <Card>        
                    <button id="30" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        champ agne
                    </button>
                    </Card>
                    </div>

                </Carousel>
                }
                
            </div>
        )
}

export default Wine;