import React from 'react';
import { GUEST_LOGIN, GUEST_LOGOUT } from '../../store/actions/action_types';
import { useSelector,useDispatch } from 'react-redux';

import aboutPic from './aboutLaptop.jpg';
import howToMobile from './howToMobile.jpg';
import cheers from './cheers.png';
import friends from './friends.png';
import graph from './graph.png';

import './welcomePage.css';

const WelcomePage = () => {
    const guestLogin = useSelector(guest => guest.user_reducer.guest_login)
    const dispatch = useDispatch();
    return (
        <div id="welcome-page">
            <div className="banner">
                <h1>Welcome to Drink Social</h1>
                {guestLogin ? 
                <button onClick={() => dispatch({type: GUEST_LOGOUT})}>
                    Guest Logout
                </button> :
                <button onClick={() => dispatch({type: GUEST_LOGIN})}>
                    Guest Login
                </button>
                  }
                {guestLogin ? <h4>You now have access to the profile. No data will be saved. Login to have full access</h4> : null}
            </div>
            <section className="application-description">
                <div className="application-about">
                    <p>At Drink Social you'll be able to keep track of drinks, follow friends and see popular drink choices by users.</p>
                    <p>Click on Guest login for a sneak peak into the profile.</p>
                    <p>If you'd like join, feel free to head to the login page and sign up!</p>
                </div>
                <div className="application-description-pic">
                   <img src={aboutPic} alt="app pic"/>
                </div>
            </section>
            <section className="application-how-to">
                <div className="application-hot-to-pic">
                    <img src={howToMobile} alt="mobile pic" />
                </div>
                <div className="application-how-to-description">
                    <p>Choose between a curated list of drinks.</p>
                    <p>Keep track what you had last and what time.</p>
                    <p>As well as a breakdown of each drink you've had.</p>
                </div>
            </section>
            <section className="application-upcoming-features-container">
               <h3>Upcoming Features</h3>
               <div className="application-upcoming-features" >
                    <div className="upcoming-features-pic">
                        <img src={friends} alt="friends" />
                        <p>follow friends and see what they have been drinking.</p>
                    </div>
                    <div className="upcoming-features-pic">
                        <img src={graph} alt="friends" />
                        <p>A graph listing what drinks have been consumed.</p>
                    </div>
                    <div className="upcoming-features-pic">
                        <img src={cheers} alt="friends" />
                        <p>Send a virtual cheers to your friends.</p>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default WelcomePage;
