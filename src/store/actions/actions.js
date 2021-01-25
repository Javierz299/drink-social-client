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