import * as actionTypes from '../types';
import { auth as authServices } from '../services';
import { push } from 'connected-react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import wrapper from './wrapper';
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = data => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        data
    };
};


export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error
    };
};


export const auth = credentials => {
    return async (dispatch) => {
        dispatch(authStart());
        dispatch(showLoading());
        const {username,password}=credentials;
        authServices.login(username, password)
            .then(
                user => {
                    if (user.access_token) {
                        localStorage.setItem('user', JSON.stringify(user));
                        dispatch(authSuccess(user));
                        dispatch(push('/'));
                    }
                },
                error => dispatch(authFail(error.toString()))
            );
        dispatch(hideLoading());
    };
};
export const athen = credentials => {
    return  dispatch => {
        dispatch(showLoading());
        authServices.signup(credentials)
            .then(
                data => {
                    
                },
                error => dispatch(authFail(error.toString()))
            );
        dispatch(hideLoading());
    };
};

export const authCheckState = () => {
    return (dispatch,getState) => {
        const { location } = getState().router;
        const user =JSON.parse(localStorage.getItem('user'));
        const userx={
            access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE4NDBmYTJlLTZlMTctNGQyNy05OTA5LWQzMWI4MzM0YjQ5NyIsImlhdCI6MTU1NjgwNTczM30.deiVZLTlEm6R9Cc64yFOrzf1KhhmL4ycxYoduoNx5fM',
            id:'A840FA2E-6E17-4D27-9909-D31B8334B497'
        }
        //dispatch(!user ? logout() : authSuccess(user));
        dispatch(!userx ? logout() : authSuccess(userx));
        
        
    };
};
export const resetPwd = credentials => {
    return async dispatch => {
        dispatch(authStart());
        dispatch(showLoading());
        authServices.resetPassword(credentials)
            .then(
                data => {
                    dispatch(push('/login'));
                },
                error => dispatch(authFail(error.toString()))
            );
        
        dispatch(hideLoading());
    };
};
export const logout =() => {
    return (dispatch) => {
        localStorage.removeItem('user');
        dispatch({
            type: actionTypes.AUTH_LOGOUT
        });
        dispatch(push('/login'));
    }; 
};
