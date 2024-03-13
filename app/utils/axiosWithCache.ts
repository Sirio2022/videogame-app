import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create({
  baseURL: 'https://api.rawg.io/api/',
});

const AxiosInstance = setupCache(instance);

export default AxiosInstance;
