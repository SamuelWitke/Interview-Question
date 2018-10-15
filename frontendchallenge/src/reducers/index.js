import { combineReducers } from 'redux';
import * as ants from './ants';
import * as ui from './ui';
import { apolloReducer } from 'apollo-cache-redux';


export const rootReducer =
    combineReducers({
        ants: ants.reducer,
        apollo: apolloReducer,
        ui: ui.reducer
});                       