import * as actionTypes from '../types';
import { project } from '../services';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const failed = error => {
    return { type: actionTypes.PROJECT_FAILED, data: error };
};

const loaded = data => {
    return {
        type: actionTypes.PROJECT_LOADED,
        data
    };
};
const selected = data => {
    return {
        type: actionTypes.PROJECT_SELECTED,
        data
    };
};
export const getAll = () => {
    return (dispatch,getState) => {
        const {token}=getState().auth;
        dispatch(showLoading());
        project.getAll(token).then(
            projects => dispatch(loaded(projects.data)),
            error => dispatch(failed(error.toString()))
        );
        dispatch(hideLoading());

    };
};
export const getById = id => {
    return (dispatch, getState) => {
        const { token } = getState().auth;
        dispatch(showLoading());
        project.getById(id,token).then(
            projects => {
                dispatch(loaded(projects));
                //dispatch(push('/projects'));
            },
            error => dispatch(failed(error.toString()))
        );

        dispatch(hideLoading());

    };
};

export const select = param => {
   
    return async (dispatch) => {
        dispatch(selected(param));

    };
};

