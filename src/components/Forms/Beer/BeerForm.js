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

import postLiquorId from '../../../LiquorStore/PostLiquorId';

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

        return (
            <div className="carousel-container">
                <Carousel breakPoints={breakPoints}>
                    <div>
                    <h3>brewski</h3>
                    <Card>        
                        <img id="1"
                        src={beer} alt="beer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>
                    <h3>pint brewski</h3>
                    <Card>        
                        <img id="2"
                        src={beer} alt="beer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>
                    <h3>tall brewski</h3>
                    <Card>        
                        <img id="3"
                        src={beer} alt="beer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>
                    <h3>40oz brewski</h3>
                    <Card>        
                        <img id="4"
                        src={beer} alt="beer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>craft</h3>
                    <Card>        
                        <img id="5"
                        src={craft} alt="craft"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>
                    <h3>pint craft</h3>
                    <Card>        
                        <img id="6"
                        src={craft} alt="craft"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>
                    <h3>tall craft</h3>
                    <Card>        
                        <img id="7"
                        src={craft} alt="craft"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>seltzer</h3>
                    <Card>        
                        <img id="8"
                        src={selzter} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>
                    <div>
                    <h3>tall seltzer</h3>
                    <Card>        
                        <img id="9"
                        src={selzter} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>smirnoff ice</h3>
                    <Card>        
                        <img id="10"
                        src={smirnoff} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>6% brewski</h3>
                    <Card>        
                        <img id="11"
                        src={six} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>7% brewski</h3>
                    <Card>        
                        <img id="12"
                        src={seven} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>8% brewski</h3>
                    <Card>        
                        <img id="13"
                        src={eight} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>9% brewski</h3>
                    <Card>        
                        <img id="14"
                        src={nine} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>10%+ bewski</h3>
                    <Card>        
                        <img id="15"
                        src={ten} alt="seltzer"
                        onClick={(e) => postLiquorId(e)}
                        className="card" 
                        />
                    </Card>
                    </div>
                </Carousel>
            </div>
        )
}

export default BeerForms;