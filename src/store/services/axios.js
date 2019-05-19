import axios from 'axios';
export default axios.create({
  baseURL: 'https://staging-api.funnelytics.io',
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.token}`
    },
      'Content-Type': 'application/json'
  }
});
export const setAuthHeader = (token = null) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
//export default instance;
