import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    submit_drink_form: false,
    drink_item: ''
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SUBMIT_DRINK:
            console.log('USER_REDUCER SUBMIT')
            return {
                ...state,
                submit_drink_form: action.payload,
            }
        case ACTION_TYPES.DRINK_ITEM:
                console.log('USER_REDUCER drink item',action.payload)
                return {
                    ...state,
                    drink_item: action.payload,
                }
        default:
            return state;
    }
}

export default AuthReducer;