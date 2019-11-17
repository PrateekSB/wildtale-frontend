import axios, { AxiosRequestConfig } from 'axios';

const requestConfig: AxiosRequestConfig = {
  baseURL: 'https://wildtale-spring-app.herokuapp.com/',
  timeout: 50000,
};

export const apiCall = axios.create();

