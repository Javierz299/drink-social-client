import React, { useEffect, Fragment } from 'react';
import { Route, Switch } from 'react-router';
import MainNavButtons from '../../MainNavButtons/MainNavButtons';

import AuthCallBack from '../../AuthCallBack/AuthCallBack';
import AuthCheck from '../../../utils/Auth_Check';
import Auth from '../../../utils/auth';
import UnAuthRedirect from '../../../utils/UnAuthRedirect';
import PrivateRoute from '../PrivateRoute';

import ProtectedRoute from '../../Profile/Profile';
import SearchFriends from '../../SearchFriends/SearchFriends';
import WelcomePage from '../../WelcomPage/WelcomePage';
import PublicGraph from '../../PublicGraph/PublicGraph';

//import UnderConstruction from '../../Spinner/construction';

import { useSelector, useDispatch } from 'react-redux';

const auth = new Auth();

const PublicRoutes = () => {
    const guestLogin = useSelector(guest => guest.user_reducer.guest_login);
    const profile = useSelector(prof => prof.auth_reducer.prolife);

    const dispatch = useDispatch();

    // silent authentication, runs every route change
    // also keeps logged out button as "log out" on refresh
    useEffect(() => {
            if(auth.isAuthenticated()){
                dispatch({type: "LOGIN_SUCCESS"});
                // redux takes some time to update state
                // and dispatch is called imeditally so we need a small delay
                auth.getProfile();
                setTimeout(() => {
                    dispatch({type: "ADD_PROFILE", payload: auth.userProfile});




                }, 900);// small delay to getProfile
            } else {
                dispatch({type: "LOGIN_FAILURE"});
                dispatch({type: "REMOVE_PROFILE"});
            }

    }, [profile]);

    return (
        <Fragment>
            <MainNavButtons auth={auth} />
                <Switch>
                    <Route exact path="/" component={WelcomePage}/>

                    <Route path="/redirect" component={UnAuthRedirect} />
                    <Route path="/callback" render={(props) => {auth.handleAuthentication(props); return <AuthCallBack props={props} />}} />
                    <Route path="/authcheck" render={() => <AuthCheck auth={auth} />} />

                    <Route path="/public" render={() => <PublicGraph />} />

                    <Route path="/search"  component={SearchFriends}/>
                
                    <PrivateRoute path="/profile" component={ProtectedRoute} auth={auth} guest={guestLogin}/>
                </Switch>
        </Fragment>
    )
}

export default PublicRoutes
