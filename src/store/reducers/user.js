import * as actionTypes from '../types';
import { updateState } from './state';
const initialState = {
    user: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, { data, type }) => {
    switch (type) {
        case actionTypes.USER_LOADED: 
            return updateState(state, {
                user: data,
                error: null,
                loading: false
            });

        case actionTypes.USER_LOADING:
            return updateState(state, { error: null, loading: true });
        case actionTypes.USER_FAILED:
            return updateState(state, { error: data, loading: false });
        default:
            return state;
    }
};

export default reducer;
