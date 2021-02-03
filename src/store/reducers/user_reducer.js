import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    submit_drink_form: false,
    submit_wine_form: false,
    submit_liquor_form: false,
    submit_binge_form: false,
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SUBMIT_DRINK:
            console.log('USER_REDUCER SUBMIT')
            return {
                ...state,
                submit_drink_form: true,
            }
        default:
            return state;
    }
}

export default AuthReducer;