import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    is_authenticated: false,
    profile: null,
    dbUserId: null,
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
        case ACTION_TYPES.DB_USER_ID:
            console.log("ID",action.payload)
            return {
                ...state,
                dbUserId: action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;