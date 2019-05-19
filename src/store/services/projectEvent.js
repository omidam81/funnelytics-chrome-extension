import parser from './parser';
const apiEndpoint = 'https://staging-api.funnelytics.io/project-events';
export const projectEvent = {
    getAll: (token) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        };

        return fetch(apiEndpoint, requestOptions)
            .then(parser)
            .then(result => result);
    },
    getByFilter: (filter,filterValue,token,includeProject=false) => {
        const url = !includeProject ? `${apiEndpoint}?filter[${filter}]=${filterValue}`:
            `${apiEndpoint}?filter[${filter}]=${filterValue}?include=project`
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        };

        return fetch(url, requestOptions)
            .then(parser)
            .then(result => result);
    },
    
    getById: (id,token, includeProject = false) => {
        const url = !includeProject ? `${apiEndpoint}/${id}` :
            `${apiEndpoint}/${id}?include=project`
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        };

        return fetch(url, requestOptions)
            .then(parser)
            .then(result => result);
    },
    create: (data,token) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(data)
        };

        return fetch(apiEndpoint, requestOptions)
            .then(parser)
            .then(result => result);
    },

    // update: (id, data) => {
    // },

    remove: (id,token) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        };

        return fetch(`${apiEndpoint}/${id}`, requestOptions)
            .then(parser)
            .then(result => result);
    },
    getAttributes: (token) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        };

        return fetch(`${apiEndpoint}-attributes`, requestOptions)
            .then(parser)
            .then(result => result);
    },
    getAttributesById: (id,token,includeEvent=false) => {
        const url = !includeEvent ? `${apiEndpoint}-attributes/${id}` 
        : `${apiEndpoint}-attributes/${id}?include=event`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        };

        return fetch(url, requestOptions)
            .then(parser)
            .then(result => result);
    },
    createAttribute: (data,token) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(data)
        };

        return fetch(apiEndpoint, requestOptions)
            .then(parser)
            .then(result => result);
    },
};
