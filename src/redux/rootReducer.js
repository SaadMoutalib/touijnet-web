import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'

import userReducer from './User/user.reducer';

export const rootReducer = combineReducers({
    user: userReducer
});

const configStorage = {
    key: 'root',
    storage: storageSession,
    whitelist: ['user']
};

export default persistReducer(configStorage, rootReducer);