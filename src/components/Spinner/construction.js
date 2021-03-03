import React from 'react';
import Lottie from 'react-lottie';
import * as loading from './under-construction.json';

import './underConstruction.css';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidyMid slice'
    }
};

const UnderConstruction = () => {
   //height={100} width={100}
        return (
            <div className="uderConstruction">
                <Lottie options={defaultOptions}/>
            </div>
        )

};

export default UnderConstruction;
