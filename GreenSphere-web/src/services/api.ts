import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.129.6.39:3000',
  timeout: 5000,
});

export default api;
