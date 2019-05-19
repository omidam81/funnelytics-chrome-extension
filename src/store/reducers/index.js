import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import user from './user';
import project from './project';
import projectEvent from './projectEvent';

import { connectRouter } from 'connected-react-router'
import { loadingBarReducer } from 'react-redux-loading-bar'
const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    auth,
    user,
    project,
    projectEvent,
    
    loadingBar: loadingBarReducer,
});

export default rootReducer;
