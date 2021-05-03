import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    pending_requests: [],
};

const PendingRequest = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.PENDING_REQUESTS:
            //console.log('LOGIN SUCCESS')
            return {
                ...state,
                pending_requests: action.payload
            }
        default:
            return state;
    }
}

export default PendingRequest;