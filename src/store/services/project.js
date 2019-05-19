import parser from './parser';
const apiEndpoint = 'https://staging-api.funnelytics.io/projects';
export const project = {
    getAll: (token) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        };

        return fetch(apiEndpoint, requestOptions)
            .then(parser)
            .then(project => project);
    },
    getById: (id,token) => {
        let url = `${apiEndpoint}/${id}`;
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` },
        };

        return fetch(url, requestOptions)
            .then(parser)
            .then(project => project);
    },

};
