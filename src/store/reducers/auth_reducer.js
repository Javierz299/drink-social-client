import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    is_authenticated: false,
    profile: null,
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.LOGIN_SUCCESS:
            console.log('LOGIN SUCCESS')
            return {
                ...state,
                is_authenticated: true,
            }
        case ACTION_TYPES.LOG_OUT:
            console.log("LOG OUT")
            return {
                ...state,
                is_authenticated: false,
            }
        case ACTION_TYPES.LOGIN_FAILURE:
            console.log('LOGIN FAILURE')
                return {
                    ...state,
                    is_authenticated: false
                }
        case ACTION_TYPES.ADD_PROFILE:
            console.log('PROFILE',action.payload)
            return {
                ...state,
                profile: action.payload
            }
        case ACTION_TYPES.REMOVE_PROFILE:
            return {
                ...state,
                profile: null
            }
        default:
            return state;
    }
}

export default AuthReducer;