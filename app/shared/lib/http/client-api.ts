import axios from 'axios';

export type ApiErrorResponse = {
  code?: string;
  message?: string;
  details?: unknown;
};

export const clientApi = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientApi.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);
