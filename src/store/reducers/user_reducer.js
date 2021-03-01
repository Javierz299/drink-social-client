import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    submit_beer_drink_form: false,
    submit_cocktail_drink_form: false,
    submit_wine_drink_form: false,
    submit_liquor_drink_form: false,
    submit_binge_drink_form: false,
    drink_item: '',
    allDrinkValues: null,
    totalOfAllDrinks: 0,
    lastDrinkItem: '',
    guest_login: false,
};

const AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.SUBMIT_BEER_DRINK:
            return {
                ...state,
                submit_beer_drink_form: action.payload,
            }
            case ACTION_TYPES.SUBMIT_COCKTAIL_DRINK:
            return {
                ...state,
                submit_cocktail_drink_form: action.payload,
            }
            case ACTION_TYPES.SUBMIT_WINE_DRINK:
            return {
                ...state,
                submit_wine_drink_form: action.payload,
            }
            case ACTION_TYPES.SUBMIT_LIQUOR_DRINK:
            return {
                ...state,
                submit_liquor_drink_form: action.payload,
            }
            case ACTION_TYPES.SUBMIT_BINGE_DRINK:
            return {
                ...state,
                submit_binge_drink_form: action.payload,
            }
        case ACTION_TYPES.DRINK_ITEM:
                return {
                    ...state,
                    drink_item: action.payload,
                }
        case ACTION_TYPES.GET_ALL_DRINK_VALUES:
                return {
                    ...state,
                    allDrinkValues: action.payload,
                }
        case ACTION_TYPES.TOTAL_OF_ALL_DRINKS:
                return {
                    ...state,
                    totalOfAllDrinks: action.payload,
                }
        case ACTION_TYPES.SET_LAST_DRINK_ITEM:
                return {
                    ...state,
                    lastDrinkItem: action.payload,
                }
        case ACTION_TYPES.GUEST_LOGIN:
                return {
                    ...state,
                    guest_login: true,
                }
        case ACTION_TYPES.GUEST_LOGOUT:
                return {
                    ...state,
                    guest_login: false,
                }
        default:
            return state;
    }
}

export default AuthReducer;