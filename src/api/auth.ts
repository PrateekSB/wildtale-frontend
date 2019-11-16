// eslint-disable-next-line import/no-cycle
import { authApiCall, apiCall } from '@/api/core';

export async function authenticate(username: string, password: string): Promise<string> {
  const response = await apiCall.post('/login', { username, password });
  return response.data;
}

export async function logout() {
  await authApiCall.post('/logout');
}

export async function check(): Promise<string> {
  return (await apiCall.get('/hello')).data;
}
