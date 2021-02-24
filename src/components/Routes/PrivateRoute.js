import React from 'react'
import { Redirect, Route } from 'react-router-dom'
//                                    pass guest login
const PrivateRoute = ({component: Component, auth, guest}) => {
        //                                               || guest login === true
   return <Route render={props => auth.isAuthenticated() === true || guest ?
        <Component auth={auth} {...props}/> :
        <Redirect to="/redirect" /> } 
        />
}

export default PrivateRoute
