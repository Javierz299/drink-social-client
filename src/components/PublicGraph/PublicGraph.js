import React, { useState, useEffect }  from 'react';
import {Bar} from 'react-chartjs-2';

import axios from 'axios';
import config from '../../config';

const PublicGraph = () => {
    const [drink, setDrink] = useState(0)
    const state = {
        labels: ['Beer', 'Cocktail', 'Wine',
                 'Liquor', 'Other'],
        datasets: [
          {
            label: '',
            backgroundColor: [
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
            ],
            data: [
                drink.beerTotal,
                drink.cocktailTotal,
                drink.wineTotal,
                drink.liquorTotal,
                drink.bingeTotal,
                ]
          }
        ]
      }
    useEffect(() => {
        axios.get(`${config.API_ENDPOINT}/get/cumulativeDrinks`)
            .then((result) => setDrink(result.data))
       
    }, [])
    console.log("drinks",drink)
    return (
        <div>
            <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Cumulative Drinks',
              fontSize:20,
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        </div>
    )
}

export default PublicGraph
