import * as ACTION_TYPES from './action_types'

export const login_success = () => {
    return {
        type: ACTION_TYPES.LOGIN_SUCCESS
    }
};

export const log_out = () => {
    return {
        type: ACTION_TYPES.LOG_OUT
    }
};

export const login_failure = () => {
    return {
        type: ACTION_TYPES.LOGIN_FAILURE
    }
};

export const add_profile = (profile) => {
    return {
      type: ACTION_TYPES.ADD_PROFILE,
      payload: profile
    }
};
  
export const remove_profile = () => {
    return {
      type: ACTION_TYPES.REMOVE_PROFILE
    }
};

export const submit_beer_drink = () => {
    return {
        type: ACTION_TYPES.SUBMIT_BEER_DRINK
    }
};

export const drink_item = (item) => {
    return {
        type: ACTION_TYPES.DRINK_ITEM,
        payload: item
    }
};

export const get_all_drink_values = (drinks) => {
    return {
        type: ACTION_TYPES.GET_ALL_DRINK_VALUES,
        payload: drinks
    }
};

export const total_of_drinks = (total) => {
    return {
        type: ACTION_TYPES.TOTAL_OF_ALL_DRINKS,
        payload: total
    }
};

export const set_last_drink_item = (item) => {
    return {
        type: ACTION_TYPES.SET_LAST_DRINK_ITEM,
        payload: item
    }
};

export const db_user_id = (userId) => {
    return {
        type: ACTION_TYPES.DB_USER_ID,
        payload: userId
    }
};

export const guest_login = () => {
    return {
        type: ACTION_TYPES.GUEST_LOGIN,
    }
}

export const guest_drink = (drink) => {
    return {
        type: ACTION_TYPES.GUEST_DRINK,
        payload: drink
    }
}