import axios, { AxiosRequestConfig } from 'axios';

import router from '@/router';
import { storeProxy } from '@/store';

const requestConfig: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 50000,
};

export const apiCall = axios.create(requestConfig);

export const authApiCall = axios.create(requestConfig);

authApiCall.interceptors.request.use(
  (config) => {
    const jwt = storeProxy.auth.jwt;
    if (jwt) {
      config.headers.Authorization = `Bearer ${jwt}`;
      return config;
    }
    const msg = 'JWT token is not available for request';
    throw new Error(msg);
  },
  error => Promise.reject(error),
);

authApiCall.interceptors.response.use(
  response => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      router.push('/logout');
    }
    throw error;
  },
);
