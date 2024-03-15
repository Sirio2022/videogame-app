import axios, { AxiosRequestHeaders } from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  timeout: 10000,
  headers: {
    Pragma: null,
    'Cache-Control': 'null  ',
    'If-None-Match': null,
  },
});

const AxiosInstance = setupCache(instance);

export default AxiosInstance;
