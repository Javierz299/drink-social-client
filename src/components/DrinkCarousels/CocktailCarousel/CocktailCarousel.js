import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import CocktailForm from '../../AlcoholForm/CocktailForm';
import breakPoints from '../../../Carousel/breakPoints';
import liquorStore from '../../../LiquorStore/LiquorStore';

import { Card } from 'react-bootstrap';

const Cocktail = () => {
    const submitCockTailDrink = useSelector(submitCockTailDrink => submitCockTailDrink.user_reducer.submit_cocktail_drink_form)
    const dispatch = useDispatch()

    const sendDrinkItem = (e) => {
        dispatch({type: "SUBMIT_COCKTAIL_DRINK", payload: true})
        const item = e.target.id;
        const drinkItem = liquorStore[item];
        dispatch({type: "DRINK_ITEM", payload: drinkItem}) 
   }
   
        return (
            <div className="carousel-container">
                {submitCockTailDrink ? <CocktailForm /> :
                    <Carousel breakPoints={breakPoints}>
                    <div>
                    <h3>MARGARITA</h3>
                    <Card>        
                    <button id="16" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        marg arita
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>BLOODY MARY</h3>
                    <Card>        
                    <button id="17" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        bloody mary
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>MIMOSA</h3>
                    <Card>        
                    <button id="18" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        mim osa
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>MARTINI</h3>
                    <Card>        
                    <button id="19" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        mar tini
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>MOJITO</h3>
                    <Card>        
                    <button id="20" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        mojito
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>GIN AND TONIC</h3>
                    <Card>        
                    <button id="21" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        gin N tonic
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>MOSCOW MULE</h3>
                    <Card>        
                    <button id="22" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        mos cow
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>PALOMA</h3>
                    <Card>        
                    <button id="23" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        palo ma
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>DAIQUIRI</h3>
                    <Card>        
                    <button id="24" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                       daiq
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>LONG ISLAND</h3>
                    <Card>        
                    <button id="25" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        long island
                    </button>
                    </Card>
                    </div>

                    <div>
                    <h3>MISC COCKTAIL</h3>
                    <Card>        
                    <button id="26" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        misc
                    </button>
                    </Card>
                    </div>
                </Carousel>

                }
                
            </div>
        )
}

export default Cocktail;