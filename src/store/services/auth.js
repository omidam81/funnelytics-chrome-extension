import parser from './parser';
const apiEndpoint = 'https://staging-api.funnelytics.io/auth';


export const auth = {
  
  signup: credentials => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    };

    return fetch(apiEndpoint, requestOptions).then(parser);
  },
  login: (username, password) => {
    let grant_type = 'passowrd';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ grant_type, username, password })
    };

    return fetch(apiEndpoint, requestOptions)
      .then(parser)
      .then(user =>user);
  }
};
