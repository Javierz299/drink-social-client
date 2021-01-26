import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router';
import history from '../../../utils/history';
import MainNavButtons from '../../MainNavButtons/MainNavButtons';
import AuthCallBack from '../../AuthCallBack/AuthCallBack';
import AuthCheck from '../../../utils/Auth_Check';
import Auth from '../../../utils/auth';
import UnAuthRedirect from '../../../utils/UnAuthRedirect';
import PrivateRoute from '../PrivateRoute';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

import { useDispatch, useSelector } from 'react-redux';

const auth = new Auth();

const PublicRoutes = () => {
    //const profile = useSelector(profile => profile)
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
                }, 1000);
            } else {
                dispatch({type: "LOGIN_FAILURE"});
                dispatch({type: "REMOVE_PROFILE"});
            }

    }, []);

    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => <MainNavButtons auth={auth} /> } />
                    <Route path="/redirect" component={UnAuthRedirect} />
                    <Route path="/callback" render={(props) => {auth.handleAuthentication(props); return <AuthCallBack props={props} />}} />
                    <Route path="/authcheck" render={() => <AuthCheck auth={auth} />} />

                    <PrivateRoute path="/privateroute" component={ProtectedRoute} auth={auth}/>
                </Switch>
            </Router>
        </div>
    )
}

export default PublicRoutes
