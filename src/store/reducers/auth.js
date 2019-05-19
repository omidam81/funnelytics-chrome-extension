import * as actionTypes from '../types';
import { updateState } from './state';
import { setAuthHeader } from '../services/axios';

const initialState = {
    token: null,
    id:null,
    error: null,
    loading: false,
};

const authStart = (state, action) => {
    return updateState(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    setAuthHeader(action.data);
    return updateState(state, {
        token: action.data.access_token,
        id: action.data.id,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateState(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateState(state, { token: null });
};



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAILED:
            return authFail(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        default:
            return state;
    }
};

export default reducer;
