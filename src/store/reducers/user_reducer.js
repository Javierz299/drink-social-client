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
                console.log('USER_REDUCER drink item',action.payload)
                return {
                    ...state,
                    drink_item: action.payload,
                }
        case ACTION_TYPES.GET_ALL_DRINK_VALUES:
                console.log('USER REDUCER ALL DRINKS',action.payload)
                return {
                    ...state,
                    allDrinkValues: action.payload,
                    }
        case ACTION_TYPES.TOTAL_OF_ALL_DRINKS:
                console.log('USER REDUCER DRINK TOTAL',action.payload)
                return {
                    ...state,
                    totalOfAllDrinks: action.payload,
                    }
        default:
            return state;
    }
}

export default AuthReducer;