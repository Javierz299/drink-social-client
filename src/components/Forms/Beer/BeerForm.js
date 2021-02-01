import React from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../../Cards/BeerCard/BeerCard';

import beer from '../../../FormPicutres/beer.png'
import beerBottle from '../../../FormPicutres/beerbottle.jpg'
import craft from '../../../FormPicutres/craft.png'
import selzter from '../../../FormPicutres/seltzer.png'
import whiskey from '../../../FormPicutres/whiskey.png'

import './beerForm.css'

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
                beer
                <Carousel breakPoints={breakPoints}>
                    <Card>
                        <div 
                        onClick={() => console.log("clicked one")}
                        className="card">1
                        </div>
                    </Card>
                    <Card><div 
                        onClick={() => console.log("clicked two")}
                        className="card">2</div></Card>
                    <Card>3</Card>
                    <Card>4</Card>
                    <Card>5</Card>
                    <Card>6</Card>
                </Carousel>
            </div>
        )
}

export default BeerForms;