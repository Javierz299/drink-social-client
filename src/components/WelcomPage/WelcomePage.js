import React from 'react';
import { GUEST_LOGIN } from '../../store/actions/action_types';
import { useSelector,useDispatch } from 'react-redux';

import aboutPic from './aboutLaptop.jpg';
import howToMobile from './howToMobile.jpg';

import './welcomePage.css';

const WelcomePage = () => {
    const guestLogin = useSelector(guest => guest.user_reducer.guest_login)
    const dispatch = useDispatch();
    return (
        <div id="welcome-page">
            <div className="banner">
                <h1>Welcome to Drink Social</h1>
                <button onClick={() => dispatch({type: GUEST_LOGIN})}>
                    Guest Login
                </button>  
                {guestLogin ? <h4>You now have access to the profile. No data will be saved. Login to have full access</h4> : null}
            </div>
            <section className="application-description">
                <div>
                    <p>At Drink Social you'll be able to keep track of drinks, Follow friends and see popular drink choices by users.</p>
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
                <div>
                    how to use
                </div>
            </section>
            <section className="application-upcoming-features">
                upcoming features
            </section>
        </div>
    )
};

export default WelcomePage;
