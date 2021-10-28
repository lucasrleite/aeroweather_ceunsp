import axios from 'axios';

const api = axios.create({
  baseURL : 'https://tools.evoar.com.br/metar'
});

export default api;

