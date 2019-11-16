import axios, { AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
  baseURL: '/api',
  timeout: 50000,
};

export const apiCall = axios.create(requestConfig);

