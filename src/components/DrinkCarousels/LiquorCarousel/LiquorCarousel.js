import React from 'react';
import Carousel from 'react-elastic-carousel';

import tequila from '../../../FormPicutres/liquorpics/tequila.jpeg'
import vodka from '../../../FormPicutres/liquorpics/vodka.png'
import whiskey from '../../../FormPicutres/liquorpics/whiskey.png'

import { Card } from 'react-bootstrap';

const liquor = () => {
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
                    <h3>tequila shot</h3>
                    <Card>        
                        <img 
                        src={tequila} alt="tequila"
                        onClick={() => console.log("clicked tequila")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>vodka shot</h3>
                    <Card>        
                        <img 
                        src={vodka} alt="vodka"
                        onClick={() => console.log("clicked vodka")}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>

                    <h3>whiskey shot</h3>
                    <Card>        
                        <img 
                        src={whiskey} alt="whiskey"
                        onClick={() => console.log("clicked whiskey")}
                        className="card" 
                        />
                    </Card>
                    </div>
                </Carousel>
            </div>
        )
}

export default liquor;