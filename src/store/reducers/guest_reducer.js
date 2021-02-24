import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    guest_drink_item: '',
    guest_total: 0,
    guestTable: {
        beer: 0,
        pint_beer: 0,
        tall_beer: 0,
        forty: 0,
        craft: 0,
        craft_pint: 0,
        craft_tall: 0,
        seltzer: 0,
        tall_seltzer: 0,
        smirnoff_ice: 0,
        six_percent: 0,
        seven_percent: 0,
        eight_percent: 0,
        nine_percent: 0,
        ten_percent: 0,
        margarita: 0,
        bloody_mary: 0,
        mimosa: 0,
        martini: 0,
        mojito: 0,
        gin_and_tonic: 0,
        moscow_mule: 0,
        paloma: 0,
        daiquiri: 0,
        long_island: 0,
        misc: 0,
        red_wine: 0,
        white_wine: 0,
        sangria: 0,
        champagne: 0,
        tequilla_shot: 0,
        vodka_shot: 0,
        whiskey_shot: 0,
        bourbon: 0,
        scotch: 0,
        brandy: 0,
        beer_bong: 0,
        shotgun: 0,
        boilermaker: 0,
    }
};

const GuestReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.GUEST_DRINK:
            console.log("GUEST REDUCER",action.payload)
            return {
                ...state,
                guestTable: 0,
            }
        default:
            return state;
    }
}

export default GuestReducer;