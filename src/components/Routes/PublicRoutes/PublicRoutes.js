import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from '../../../utils/history';
import MainNavButtons from '../../MainNavButtons/MainNavButtons';
import AuthCallBack from '../../AuthCallBack/AuthCallBack';
import AuthCheck from '../../../utils/Auth_Check';
import Auth from '../../../utils/auth';
import UnAuthRedirect from '../../../utils/UnAuthRedirect';
import PrivateRoute from '../PrivateRoute';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';

const auth = new Auth();

const handleAuthentication = (props) => {
    console.log('props from public routes',props);
    if(props.location.hash){
        auth.handleAuth();
    }
};

const PublicRoutes = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" render={() => <MainNavButtons auth={auth} /> } />
                    <Route path="/redirect" component={UnAuthRedirect} />
                    <Route path="/callback" render={(props) => {handleAuthentication(props); return <AuthCallBack props={props} />}} />
                    <Route path="/authcheck" render={() => <AuthCheck auth={auth} />} />

                    <PrivateRoute path="/privateroute" component={ProtectedRoute} auth={auth}/>
                </Switch>
            </Router>
        </div>
    )
}

export default PublicRoutes
