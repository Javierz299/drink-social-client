import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import history from './history';
import { useSelector, useDispatch } from 'react-redux';
import * as ACTIONS from '../store/actions/actions'

class Auth_Check extends Component {
    // const state = useSelector(state => state.auth_reducer.is_authenticated)
    // const stateTwo = useSelector(state => state.auth_reducer.is_working)
    // const dispatch = useDispatch();


    // useEffect(() => {
    //     console.log('props from auth check',props.auth)
    //    if(props.auth.isAuthenticated){
    //     dispatch({type: 'LOGIN_SUCCESS'});
    //     history.replace('/');
       
    //    } else {
    //        console.log('AUTH FAILURE')
    //        dispatch({type: 'LOGIN_FAILURE'});
    //    }

    // }, [])

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.login_success();
            history.replace('/');
        } else {
            this.props.login_failure();
            history.replace('/')
        }
    }

render(){
    return (
        <div>
           
        </div>
    )
}
}

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
        login_success: () => dispatch(ACTIONS.login_success()),
        login_failure: () => dispatch(ACTIONS.login_failure()),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth_Check);
