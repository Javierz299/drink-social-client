import React, { useCallback, useEffect } from 'react';
import history from './history';
import { useSelector, useDispatch } from 'react-redux';
import * as ACTIONS from '../store/actions/actions';


const Auth_Check = (props) => {
    const state = useSelector(state => state.auth_reducer.is_authenticated)
    const dispatch = useDispatch();
    // const login_success = useCallback(
    //     () => dispatch({type: 'LOGIN_SUCCESS'}),
    //     [dispatch],
    // )
    // const login_failure = useCallback(
    //     () => dispatch({type: 'LOGIN_FAILURE'}),
    //     [dispatch],
    // )

    useEffect(() => {
        console.log('props from auth check',props.auth)
       if(props.auth.isAuthenticated){
        dispatch({type: 'LOGIN_SUCCESS'});
        history.replace('/');
       
       } else {
           console.log('AUTH FAILURE')
           dispatch({type: 'LOGIN_FAILURE'});
       }

    }, [state])

    return (
        <div>
            { setTimeout(() => console.log('AUTH SUCCESS',state)
        ,500)}
        </div>
    )
}

export default Auth_Check;
