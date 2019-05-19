import axios from './axios';
const apiEndpoint = '/users';
export const user = {
    
    getById: (id) => {
        return axios.get(`${apiEndpoint}/${id}`);
    },

};
