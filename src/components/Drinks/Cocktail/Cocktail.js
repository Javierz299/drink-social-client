import React from 'react';
import Carousel from 'react-elastic-carousel';

import margarita from '../../../FormPicutres/cocktailpics/margarita.jpg'
import bloodymary from '../../../FormPicutres/cocktailpics/bloodymary.jpg'
import mimosa from '../../../FormPicutres/cocktailpics/mimosa.jpg'
import martini from '../../../FormPicutres/cocktailpics/martini.jpg'
import mojito from '../../../FormPicutres/cocktailpics/mojito.jpg'
import ginandtonic from '../../../FormPicutres/cocktailpics/ginandtonic.jpg'
import moscowmule from '../../../FormPicutres/cocktailpics/moscowmule.jpg'
import paloma from '../../../FormPicutres/cocktailpics/paloma.jpeg'
import daiquiri from '../../../FormPicutres/cocktailpics/daiquiri.jpg'
import longisland from '../../../FormPicutres/cocktailpics/longisland.jpg'

import { Card } from 'react-bootstrap';

const cocktail = () => {
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
                        <img style={{background: "lightblue"}}
                        src={margarita} alt="margarita"
                        onClick={() => console.log("clicked beer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>bloody mary</h3>
                    <Card>        
                        <img 
                        src={bloodymary} alt="bloodmary"
                        onClick={() => console.log("clicked craft")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>mimosa</h3>
                    <Card>        
                        <img 
                        src={mimosa} alt="mimosa"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>martini</h3>
                    <Card>        
                        <img 
                        src={martini} alt="martini"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>mojito</h3>
                    <Card>        
                        <img 
                        src={mojito} alt="mojito"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>gin and tonic</h3>
                    <Card>        
                        <img 
                        src={ginandtonic} alt="ginandtonic"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>moscow mule</h3>
                    <Card>        
                        <img 
                        src={moscowmule} alt="mosco mule"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>paloma</h3>
                    <Card>        
                        <img 
                        src={paloma} alt="paloma"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>daiquiri</h3>
                    <Card>        
                        <img 
                        src={daiquiri} alt="daiquiri"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>long island</h3>
                    <Card>        
                        <img 
                        src={longisland} alt="long island"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>

                    <div>
                    <h3>misc cocktail</h3>
                    <Card>        
                        <img 
                        src={martini} alt="misc cocktail"
                        onClick={() => console.log("clicked seltzer")}
                        className="card" 
                        />
                    </Card>
                    </div>
                </Carousel>
            </div>
        )
}

export default cocktail;