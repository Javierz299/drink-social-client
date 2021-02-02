import React from 'react';
import Carousel from 'react-elastic-carousel';

import redwine from '../../../FormPicutres/redwine.png'
import whitewine from '../../../FormPicutres/whitewine.png'
import sangria from '../../../FormPicutres/sangria.jpeg'
import champagne from '../../../FormPicutres/champagne.png'

import { Card } from 'react-bootstrap';

const CocktailForms = () => {
   const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1440, itemsToShow: 5 },
   ]
   //pagination={false} to carousel to remove dots. 
   //And showArrows={false}
        return (
            <div className="carousel-container">
                <Carousel breakPoints={breakPoints}>
                    <div>
                    <h3>margarita</h3>
                    <Card>        
                        <img 
                        src={redwine} alt="red wine"
                        onClick={() => console.log("clicked beer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>bloody mary</h3>
                    <Card>        
                        <img 
                        src={whitewine} alt="white wine"
                        onClick={() => console.log("clicked craft")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>mimosa</h3>
                    <Card>        
                        <img 
                        src={sangria} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>martini</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>mojito</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>ginn tonic</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>moscow mule</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>paloma</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>daiquiri</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>long island</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>misc cocktail</h3>
                    <Card>        
                        <img 
                        src={champagne} alt="sangria"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>
                </Carousel>
            </div>
        )
}

export default CocktailForms;