import * as actionTypes from '../types';
import { updateState } from './state';
const initialState = {
    step: 0,
    projects: null,
    project: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, { data, type }) => {
    switch (type) {
        case actionTypes.PROJECT_LOADED: {
            return updateState(state, {
                projects: data,
                error: null,
                loading: false
            });
        }
        case actionTypes.PROJECT_SELECTED:
            return updateState(state, {
                project: data,
                step: 1,
            });
        case actionTypes.PROJECT_CREATED: {
            return updateState(state, {
                projects: [...state.events, data],
                error: null,
                loading: false
            });
        }
        case actionTypes.PROJECT_UPDATED: {
            const index = state.projects.findIndex(c => c._id === data._id);
            const env = [...state.projects];
            env[index] = data;
            return updateState(state, {
                projects: env,
                error: null,
                loading: false
            });
        }
        case actionTypes.PROJECT_DELETED: {
            const index = state.projects.findIndex(c => c._id === data._id);
            const env = [...state.projects];
            env.splice(index, 1);
            return updateState(state, {
                projects: env,
                error: null,
                loading: false
            });
        }

        case actionTypes.PROJECT_LOADING:
            return updateState(state, { error: null, loading: true });
        case actionTypes.PROJECT_FAILED:
            return updateState(state, { error: data, loading: false });
        default:
            return state;
    }
};

export default reducer;
