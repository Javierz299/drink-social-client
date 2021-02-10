import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import BeerForm from '../../AlcoholForm/BeerForm';
import liquorStore from '../../../LiquorStore/LiquorStore';

import './beerForm.css';

import { Card } from 'react-bootstrap';

const Beer = () => {
    const submitBeerDrink = useSelector(submitBeerDrink => submitBeerDrink.user_reducer.submit_beer_drink_form)
    const dispatch = useDispatch()
   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1440, itemsToShow: 5 },
   ]

   const sendDrinkItem = (e) => {
    dispatch({type: "SUBMIT_BEER_DRINK", payload: true})
       const item = e.target.id;
        const drinkItem = liquorStore[item];
        dispatch({type: "DRINK_ITEM", payload: drinkItem}) 
   }
   //pagination={false} to carousel to remove dots. 
   //And showArrows={false}

        return (
            <div className="carousel-container">
                {submitBeerDrink ? <BeerForm /> :
                <Carousel breakPoints={breakPoints}>
                <div >
                <h3>brewski</h3>
                <Card>        
                <button id="1" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        12oz Beer
                    </button>
                </Card>
                </div>
                <div>
                <h3>pint brewski</h3>
                <Card>        
                    <button id="2" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        16oz Beer
                    </button>
                </Card>
                </div>
                <div>
                <h3>tall brewski</h3>
                <Card>        
                <button id="3" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        24oz Beer 
                    </button>
                </Card>
                </div>
                <div>
                <h3>40oz brewski</h3>
                <Card>        
                <button id="4" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        FORTY 
                    </button>
                </Card>
                </div>

                <div>
                <h3>craft</h3>
                <Card>        
                <button id="5" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        12oz Craft 
                    </button>
                </Card>
                </div>
                <div>
                <h3>pint craft</h3>
                <Card>        
                <button id="6" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        16oz Craft 
                    </button>
                </Card>
                </div>
                <div>
                <h3>tall craft</h3>
                <Card>        
                <button id="7" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        24oz Craft 
                    </button>
                </Card>
                </div>

                <div>
                <h3>seltzer</h3>
                <Card>        
                <button id="8" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        12oz Seltz 
                    </button>
                </Card>
                </div>
                <div>
                <h3>tall seltzer</h3>
                <Card>        
                <button id="9" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        24oz Seltz 
                    </button>
                </Card>
                </div>

                <div>
                <h3>smirnoff ice</h3>
                <Card>        
                <button id="10" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        Ice 
                    </button>
                </Card>
                </div>

                <div>
                <h3>6% brewski</h3>
                <Card>        
                <button id="11" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        6% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>7% brewski</h3>
                <Card>        
                <button id="12" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        7% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>8% brewski</h3>
                <Card>        
                <button id="13" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        8% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>9% brewski</h3>
                <Card>        
                <button id="14" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        9% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>10%+ bewski</h3>
                <Card>        
                <button id="15" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        10%+ 
                    </button>
                </Card>
                </div>
            </Carousel>
                }
                
            </div>
        )
}

export default Beer;