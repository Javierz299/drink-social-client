import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import LiquorForm from '../../AlcoholForm/LiquorForm';
import breakPoints from '../../../Carousel/breakPoints';
import liquorStore from '../../../LiquorStore/LiquorStore';

import { Card } from 'react-bootstrap';

const Liquor = () => {
    const submitLiquorDrink = useSelector(submitLiquorDrink => submitLiquorDrink.user_reducer.submit_liquor_drink_form);
    const dispatch = useDispatch();

    const sendDrinkItem = (e) => {
        dispatch({type: "SUBMIT_LIQUOR_DRINK", payload: true})
        const item = e.target.id;
        const drinkItem = liquorStore[item];
        dispatch({type: "DRINK_ITEM", payload: drinkItem}) 
   }
   //pagination={false} to carousel to remove dots. 
   //And showArrows={false}
        return (
            <div className="carousel-container">
                {submitLiquorDrink ? <LiquorForm /> :

                <Carousel breakPoints={breakPoints}>
                    <div>
                    <h3>TEQUILA SHOT</h3>
                    <Card>        
                    <button id="31" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        tequila
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>VODKA SHOT</h3>
                    <Card>        
                    <button id="32" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        vodka
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>WHISKEY SHOT</h3>
                    <Card>        
                    <button id="33" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        whiskey
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>BOURBON</h3>
                    <Card>        
                    <button id="34" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        bourbon
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>SCOTCH</h3>
                    <Card>        
                    <button id="35" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        scotch
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>BRANDY</h3>
                    <Card>        
                    <button id="36" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        brandy
                    </button>
                    </Card>
                    </div>
                </Carousel>
                }
                
            </div>
        )
}

export default Liquor;