import React from 'react';
import Carousel from 'react-elastic-carousel';

import beer from '../../../FormPicutres/beer.png'
import craft from '../../../FormPicutres/craft.png'
import selzter from '../../../FormPicutres/seltzer.png'

import { Card } from 'react-bootstrap';

const BeerForms = () => {
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
                    <h3>beer</h3>
                    <Card>        
                        <img 
                        src={beer} alt="beer"
                        onClick={() => console.log("clicked beer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>craft</h3>
                    <Card>        
                        <img 
                        src={craft} alt="craft"
                        onClick={() => console.log("clicked craft")}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>

                    <h3>seltzer</h3>
                    <Card>        
                        <img 
                        src={selzter} alt="seltzer"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>
                </Carousel>
            </div>
        )
}

export default BeerForms;