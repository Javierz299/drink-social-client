import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';

import BeerForm from '../../AlcoholForm/BeerForm';
import breakPoints from '../../../Carousel/breakPoints';
import liquorStore from '../../../LiquorStore/LiquorStore';

import '../../../Carousel/carouselStyle.css';

import { Card } from 'react-bootstrap';

const Beer = () => {
    const submitBeerDrink = useSelector(submitBeerDrink => submitBeerDrink.user_reducer.submit_beer_drink_form)
    const dispatch = useDispatch()
   
    const sendDrinkItem = (e) => {
        dispatch({type: "SUBMIT_BEER_DRINK", payload: true})
        const item = e.target.id;
        const drinkItem = liquorStore[item];
        dispatch({type: "DRINK_ITEM", payload: drinkItem}) 
   }
  
        return (
            <div className="carousel-container">
                {submitBeerDrink ? <BeerForm /> :
                <Carousel breakPoints={breakPoints}>
                <div >
                <h3>BEER</h3>
                <Card>        
                <button id="1" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        12oz Beer
                    </button>
                </Card>
                </div>
                <div>
                <h3>BEER(PINT)</h3>
                <Card>        
                    <button id="2" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        16oz Beer
                    </button>
                </Card>
                </div>
                <div>
                <h3>BEER(TALL)</h3>
                <Card>        
                <button id="3" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        24oz Beer 
                    </button>
                </Card>
                </div>
                <div>
                <h3>BEER 40oz</h3>
                <Card>        
                <button id="4" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        FORTY 
                    </button>
                </Card>
                </div>

                <div>
                <h3>CRAFT</h3>
                <Card>        
                <button id="5" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        12oz Craft 
                    </button>
                </Card>
                </div>
                <div>
                <h3>CRAFT(PINT)</h3>
                <Card>        
                <button id="6" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        16oz Craft 
                    </button>
                </Card>
                </div>
                <div>
                <h3>CRAFT(TALL)</h3>
                <Card>        
                <button id="7" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        24oz Craft 
                    </button>
                </Card>
                </div>

                <div>
                <h3>SELTZER</h3>
                <Card>        
                <button id="8" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        12oz Seltz 
                    </button>
                </Card>
                </div>
                <div>
                <h3>SELTZER(TALL)r</h3>
                <Card>        
                <button id="9" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        24oz Seltz 
                    </button>
                </Card>
                </div>

                <div>
                <h3>SMIRNOFF ICE</h3>
                <Card>        
                <button id="10" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        Ice 
                    </button>
                </Card>
                </div>

                <div>
                <h3>6% BEER</h3>
                <Card>        
                <button id="11" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        6% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>7% BEER</h3>
                <Card>        
                <button id="12" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        7% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>8% BEER</h3>
                <Card>        
                <button id="13" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        8% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>9% BEER</h3>
                <Card>        
                <button id="14" onClick={(e) => sendDrinkItem(e)}
                        className="card-button">
                        9% 
                    </button>
                </Card>
                </div>

                <div>
                <h3>10%+ BEER</h3>
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