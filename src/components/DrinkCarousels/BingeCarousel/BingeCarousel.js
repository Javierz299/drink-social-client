import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import BingeForm from '../../AlcoholForm/BingeForm';
import breakPoints from '../../../Carousel/breakPoints';
import liquorStore from '../../../LiquorStore/LiquorStore';

import { Card } from 'react-bootstrap';

const Binge = () => {
    const submitBingeDrink = useSelector(submitBingeDrink => submitBingeDrink.user_reducer.submit_binge_drink_form)
    const dispatch = useDispatch()
  
    const sendDrinkItem = (e) => {
        dispatch({type: "SUBMIT_BINGE_DRINK", payload: true})
        const item = e.target.id;
        const drinkItem = liquorStore[item];
        dispatch({type: "DRINK_ITEM", payload: drinkItem}) 
   }
   //pagination={false} to carousel to remove dots. 
   //And showArrows={false}
        return (
            <div className="carousel-container">
                {submitBingeDrink ? <BingeForm /> :
                    <Carousel breakPoints={breakPoints}>
                    <div>
                    <h3>beer bong</h3>
                    <Card>        
                    <button id="37" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        beer bong
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>shotgun</h3>
                    <Card>        
                    <button id="38" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        shot gun
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>boilermaker</h3>
                    <Card>        
                    <button id="39" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        boiler maker
                    </button>
                    </Card>
                    </div>

                </Carousel>

                }
                
            </div>
        )
}

export default Binge;