import * as actionTypes from '../types';
import { user } from '../services';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

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
        dispatch(showLoading());
        user.getById(id)
            .then(
                data => loaded(data) ,
                error => dispatch(failed(error.toString()))
            );
        dispatch(hideLoading());

    };
};
