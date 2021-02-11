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
}

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
}

export const drink_item = (item) => {
    return {
        type: ACTION_TYPES.DRINK_ITEM,
        payload: item
    }
}

export const db_user_id = (userId) => {
    return {
        type: ACTION_TYPES.DB_USER_ID,
        payload: userId
    }
}