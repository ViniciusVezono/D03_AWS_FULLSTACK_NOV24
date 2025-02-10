import axios from 'axios';

const api = axios.create({
  baseURL: 'http://18.219.190.13:3000',
  timeout: 5000,
});

export default api;
