import React from 'react';
import Carousel from 'react-elastic-carousel';

import beer from '../../../FormPicutres/beerpics/beer.png'
import craft from '../../../FormPicutres/beerpics/craft.png'
import selzter from '../../../FormPicutres/beerpics/seltzer.png'
import smirnoff from '../../../FormPicutres/beerpics/smirnoffice.jpeg'
import six from '../../../FormPicutres/beerpics/six.jpg'
import seven from '../../../FormPicutres/beerpics/seven.jpg'
import eight from '../../../FormPicutres/beerpics/eight.jpg'
import nine from '../../../FormPicutres/beerpics/nine.jpg'
import ten from '../../../FormPicutres/beerpics/ten.jpg'

import './beerForm.css';

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

   ///add 40oz and 24 oz and 16oz
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

                    <div>
                    <h3>smirnoff ice</h3>
                    <Card>        
                        <img 
                        src={smirnoff} alt="seltzer"
                        onClick={() => console.log("clicked icer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>6 percent</h3>
                    <Card>        
                        <img 
                        src={six} alt="seltzer"
                        onClick={() => console.log("clicked icer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>7 percent</h3>
                    <Card>        
                        <img 
                        src={seven} alt="seltzer"
                        onClick={() => console.log("clicked icer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>8 percent</h3>
                    <Card>        
                        <img 
                        src={eight} alt="seltzer"
                        onClick={() => console.log("clicked icer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>9 percent</h3>
                    <Card>        
                        <img 
                        src={nine} alt="seltzer"
                        onClick={() => console.log("clicked icer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>10+ percent</h3>
                    <Card>        
                        <img 
                        src={ten} alt="seltzer"
                        onClick={() => console.log("clicked icer")}
                        className="card" 
                        />
                    </Card>
                    </div>
                </Carousel>
            </div>
        )
}

export default BeerForms;