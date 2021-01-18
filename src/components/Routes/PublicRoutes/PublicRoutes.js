import React from 'react';
import { Router, Route, Switch } from 'react-router';
import history from '../../../utils/history';
import AuthCallBack from '../../AuthCallBack/AuthCallBack'


const PublicRoutes = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" />
                    <Route path="/callback" render={(props) => <AuthCallBack props={props} />} />
                </Switch>
            </Router>
        </div>
    )
}

export default PublicRoutes
