import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, auth, guest}) => {
        //able to access this route with guest login.
   return <Route render={props => auth.isAuthenticated() === true || guest ?
        <Component auth={auth} {...props}/> :
        <Redirect to="/redirect" /> } 
        />
}

export default PrivateRoute
