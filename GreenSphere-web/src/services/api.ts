import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.137.194.139:3000',
  timeout: 5000,
});

export default api;
