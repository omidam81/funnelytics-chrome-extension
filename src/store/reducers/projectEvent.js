import * as actionTypes from '../types';
import { updateState } from './state';
const initialState = {
    step:0,
    page:1,
    events: null,
    event:null,
    sort: null,
    filter: null,
    result: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, { data, type }) => {
    switch (type) {
        case actionTypes.PROJECT_EVENT_LOADED: {
            return updateState(state, {
                events: data.data,
                result:data.data,
                error: null,
                loading: false
            });
        }
        case actionTypes.PROJECT_EVENT_SELECTED:
            return updateState(state, {
                event: data,
                step: 1,
            });
        case actionTypes.PROJECT_EVENT_CREATED: {
            return updateState(state, {
                events: [...state.events, data],
                error: null,
                loading: false
            });
        }
        case actionTypes.PROJECT_EVENT_UPDATED: {
            const index = state.events.findIndex(c => c.id === data.id);
            const env = [...state.events];
            env[index] = data;
            return updateState(state, {
                events: env,
                error: null,
                loading: false
            });
        }
        case actionTypes.PROJECT_EVENT_DELETED: {
            const index = state.events.findIndex(c => c.id === state.event.id);
            const env = [...state.events];
            env.splice(index, 1);
            return updateState(state, {
                events: env,
                event:null,
                error: null,
                loading: false
            });
        }
        case actionTypes.PROJECT_EVENT_SORTED: {
            let result;
            switch (data) {
                case 'DATE_CREATED':
                    result = state.result.sort((a, b) => new Date(b.attributes.created_at) - new Date(a.attributes.created_at));
                    break;
                case 'ALPHA_ASC':
                    result = state.result.sort((a, b) => a.attributes.label.localeCompare(b.attributes.label));
                    break;
                case 'ALPHA_DES':
                    result = state.result.sort((a, b) => b.attributes.label.localeCompare(a.attributes.label));
                    break;
                case 'TRIGGER_ASC':
                    result = state.result.sort((a, b) => a.attributes.selector.localeCompare(b.attributes.selector));
                    break;
                case 'TRIGGER_DES':
                    result = state.result.sort((a, b) => b.attributes.selector.localeCompare(a.attributes.selector));
                    break;
                default:
                    break;
            }
            return updateState(state, {
                sort:data,
                result: result
            });
        }
        case actionTypes.PROJECT_EVENT_FILTERED: {
            let result = state.result.filter(c => c.attributes.trigger_type === data);
            if(data==='clear') result=state.events;
            return updateState(state, {
                filter: data,
                result: result
            });
        }
        case actionTypes.PROJECT_EVENT_LOADING:
            return updateState(state, { error: null, loading: true });
        case actionTypes.PROJECT_EVENT_NEXT_PAGE:
            return updateState(state, { page:state.page+1});
        case actionTypes.PROJECT_EVENT_PREV_PAGE:
            return updateState(state, { page: state.page - 1 });
        case actionTypes.PROJECT_EVENT_FAILED:
            return updateState(state, { error: data, loading: false });
        default:
            return state;
    }
};

export default reducer;
