import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    friends_list: [],
};

const FriendsList = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.GET_FRIENDS:
            //console.log('LOGIN SUCCESS')
            return {
                ...state,
                friends_list: action.payload
            }
        default:
            return state;
    }
}

export default FriendsList;