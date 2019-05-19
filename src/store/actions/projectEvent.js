import * as actionTypes from '../types';
import { projectEvent } from '../services';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import wrapper from './wrapper';

const failed = error => {
  return { type: actionTypes.PROJECT_EVENT_FAILED, data: error };
};

const loaded = data => {
  return {
    type: actionTypes.PROJECT_EVENT_LOADED,
    data
  };
};

const created = data => {
  return {
    type: actionTypes.PROJECT_EVENT_CREATED,
    data
  };
};
const updated = data => {
  return {
    type: actionTypes.PROJECT_EVENT_UPDATED,
    data
  };
};
const removed = data => {
  return {
    type: actionTypes.PROJECT_EVENT_DELETED,
    data
  };
};
const failedAtt = error => {
  return { type: actionTypes.PROJECT_EVENT_ATTRIBUTE_FAILED, data: error };
};
const loadedAtt = data => {
  return {
    type: actionTypes.PROJECT_EVENT_ATTRIBUTE_LOADED,
    data
  };
};
const createdAtt = data => {
  return {
    type: actionTypes.PROJECT_EVENT_ATTRIBUTE_CREATED,
    data
  };
};
const filtered = data => {
  return {
    type: actionTypes.PROJECT_EVENT_FILTERED,
    data
  };
};
const sorted = data => {
  return {
    type: actionTypes.PROJECT_EVENT_SORTED,
    data
  };
};
const selected = data => {
  return {
    type: actionTypes.PROJECT_EVENT_SELECTED,
    data
  };
};

export const getAll = () => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .getAll(token)
      .then(
        result => dispatch(loaded(result)),
        error => dispatch(failed(error.toString()))
      );

    dispatch(hideLoading());
  };
};
export const getByFilter = (filter,value) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .getByFilter(filter, value, token)
      .then(
        result => dispatch(loaded(result)),
        error => dispatch(failed(error.toString()))
      );
    dispatch(hideLoading());
  };
};
export const getById = id => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .getById(id, token)
      .then(
        result => dispatch(loaded(result)),
        error => dispatch(failed(error.toString()))
      );
    dispatch(hideLoading());
  };
};
export const create = param => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .create(param, token)
      .then(
        result => dispatch(created(result)),
        error => dispatch(failed(error.toString()))
      );
    dispatch(hideLoading());
  };
};

export const update = (id, param) => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .update(id, param, token)
      .then(
        result => dispatch(loaded(result)),
        error => dispatch(failed(error.toString()))
      );
    const { data, error } = await wrapper(projectEvent.update(id, param, id));
    dispatch(error ? failed(error) : updated(data));
    dispatch(hideLoading());
  };
};

export const remove = id => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .remove(id, token)
      .then(
        result => dispatch(loaded(result)),
        error => dispatch(failed(error.toString()))
      );
    
    dispatch(hideLoading());
  };
};

export const getAllAttribute = () => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .getAll(token)
      .then(
        result => dispatch(loadedAtt(result)),
        error => dispatch(failedAtt(error.toString()))
      );
    dispatch(hideLoading());
  };
};
export const getAttributeById = id => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .getAttributesById(id, token)
      .then(
        result => dispatch(loadedAtt(result)),
        error => dispatch(failedAtt(error.toString()))
      );
    dispatch(hideLoading());
  };
};

export const createAttribute = param => {
  return async (dispatch, getState) => {
    const { token } = getState().auth;
    dispatch(showLoading());
    projectEvent
      .createAttribute(param, token)
      .then(
        result => dispatch(loadedAtt(result)),
        error => dispatch(failedAtt(error.toString()))
      );
    dispatch(hideLoading());
  };
};

export const select = param => {

  return async (dispatch) => {
    dispatch(selected(param));

  };
};

export const filter = param => {

  return async (dispatch) => {
    dispatch(filtered(param));

  };
};
export const sort = param => {

  return async (dispatch) => {
    dispatch(sorted(param));

  };
};

