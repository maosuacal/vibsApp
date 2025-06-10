import {AxiosAdapter} from './http/axios.adapter';

export const AuthFetcher = new AxiosAdapter({
  baseUrl: 'http://127.0.0.1:8080',
  params: {
    timeout: '60000',
  },
});
