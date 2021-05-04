import { combineReducers } from 'redux';

import AuthReducer from './auth_reducer';
import UserReducer from './user_reducer';
import GuestReducer from './guest_reducer';
import PendingRequestReducer from './pending_reducer';
import FriendsListReducer from './friend_reducer';

export default combineReducers({
    auth_reducer: AuthReducer,
    user_reducer: UserReducer,
    guest_reducer: GuestReducer,
    pending_reducer: PendingRequestReducer,
    friend_reducer: FriendsListReducer,
});