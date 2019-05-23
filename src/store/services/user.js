import parser from './parser';
const apiEndpoint = 'https://staging-api.funnelytics.io/users';
export const user = {
  getById: (id, token) => {
    let url = `${apiEndpoint}/${id}`;
    const requestOptions = {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    };

    return fetch(url, requestOptions)
      .then(parser)
      .then(data => data);
  }
};
