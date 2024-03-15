import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
  headers: {
    'Content-Type': 'application/json',
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    Expires: '0',
  },
  timeout: 10000,
});

const AxiosInstance = setupCache(instance);

export default AxiosInstance;
