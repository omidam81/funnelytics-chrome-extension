///import config from 'config';
import { authHeader } from '../helpers';

const config = {
    apiUrl: " https://staging-api.funnelytics.io/auth",
    userInfo: "https://staging-api.funnelytics.io/users/",
    project: "https://staging-api.funnelytics.io/projects"
};
export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    loadUserData,
    delete: _delete
};

function login(username, password) {
    let grant_type = 'passowrd'
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grant_type, username, password })
    };

    return fetch(`${config.apiUrl}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.access_token) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function loadUserData(user) {
    let token = user.access_token;
    let id = user.id;
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    };

    //:user-id
    return fetch(`${config.userInfo}${id}`, requestOptions)
        .then(handleResponse)
        .then(userInfo => {
            return fetch(`${config.project}`, requestOptions)
                .then(handleResponse)
                .then(projects => {
                    userInfo.projects = projects;
                    return userInfo;
                }); 
        });
}