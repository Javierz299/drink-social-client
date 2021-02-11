import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import WineForm from '../../AlcoholForm/WineForm';
import breakPoints from '../../../Carousel/breakPoints';
import liquorStore from '../../../LiquorStore/LiquorStore';

import { Card } from 'react-bootstrap';

const Wine = () => {
    const submitWineDrink = useSelector(submitWineDrink => submitWineDrink.user_reducer.submit_wine_drink_form)
    const dispatch = useDispatch();

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
                    <h3>RED WINE</h3>
                    <Card>        
                    <button id="27" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        red wine
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>WHITE WINE</h3>
                    <Card>        
                    <button id="28" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        white wine
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>SANGRIA</h3>
                    <Card>        
                    <button id="29" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        san gria
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>CHAMPAGNE</h3>
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