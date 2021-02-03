import React from 'react';
import Carousel from 'react-elastic-carousel';

import beerbong from '../../../FormPicutres/bingepics/beerbong.jpg'
import shotgun from '../../../FormPicutres/bingepics/shotgun.jpg'
import boilermaker from '../../../FormPicutres/bingepics/boilermaker.jpeg'

import { Card } from 'react-bootstrap';

const BingeForms = () => {
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
                    <h3>beer bong</h3>
                    <Card>        
                        <img 
                        src={beerbong} alt="beer bong"
                        onClick={() => console.log("clicked beer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>shotgun</h3>
                    <Card>        
                        <img 
                        src={shotgun} alt="shotgun"
                        onClick={() => console.log("clicked craft")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>boilermaker</h3>
                    <Card>        
                        <img 
                        src={boilermaker} alt="boilrmaker"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                </Carousel>
            </div>
        )
}

export default BingeForms;