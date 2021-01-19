import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({component: Component, auth}) => {
   console.log('PRIVATEROUTE',Component,auth)
   return <Route render={props => auth.isAuthenticated() === true ?
        <Component auth={auth} {...props}/> :
        <Redirect to="/redirect" /> } 
        />
}

export default PrivateRoute
