import React from 'react';
import liquorStore from '../../LiquorStore/LiquorStore';

import './alcoholForm.css'
const alcoholForm = (item) => {
    console.log('item',item)
    console.log('alcohol form', liquorStore[item])
    
    return (
        <div className="alcoholForm">
            <h1>Drinking a {liquorStore[item]}, noice!</h1>
        </div>
    )
}

export default alcoholForm
