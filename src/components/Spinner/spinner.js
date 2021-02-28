import React from 'react';
import Lottie from 'react-lottie';
import * as loading from './loading-beer-animation.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidyMid slice'
    }
};

const Loading = () => {
   
        return (
            <div>
                <Lottie options={defaultOptions} height={100} width={100}/>
                <p>If profile takes longer than a few seconds to load.</p>
                <p>Try, Logout and Log back in.</p>
            </div>
        )

};

export default Loading;
