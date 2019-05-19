import * as actionTypes from '../types';
import { user } from '../services';
//import { showLoading, hideLoading } from 'react-redux-loading-bar';
import wrapper from './wrapper';

const failed = error => {
    return { type: actionTypes.USER_FAILED, data: error };
};


const loaded = data => {
    return {
        type: actionTypes.USER_LOADED,
        data
    };
};




export const getById = id => {
    return async (dispatch) => {
        //dispatch(showLoading());
        const { data, error } = await wrapper(user.getById(id));
        dispatch(error ? failed(error) : loaded(data));
        //dispatch(hideLoading());

    };
};
