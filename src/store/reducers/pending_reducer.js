import { pending_requests } from '../actions/actions';
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
        case ACTION_TYPES.FILTER_PENDING_REQUESTS:
            const filterdRequest = state.pending_requests.filter((user) => user.user !== action.payload);
            console.log("filterRequest",filterdRequest)
            return {
                ...state,
                filterdRequest
            }
        default:
            return state;
    }
}

export default PendingRequest;