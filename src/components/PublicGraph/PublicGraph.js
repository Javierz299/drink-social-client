import React, { useEffect }  from 'react';

import axios from 'axios';
import config from '../../config';

const PublicGraph = () => {

    useEffect(() => {
        axios.get(`${config.API_ENDPOINT}/get/cumulativeDrinks`)
            .then((result) => console.log("all drinks",result))
       
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default PublicGraph
