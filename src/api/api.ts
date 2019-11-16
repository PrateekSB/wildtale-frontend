import { apiCall } from '@/api/core';

export async function getTales() {
  let url = 'https://wildtale-spring-app.herokuapp.com/';
  return await apiCall.get(url);
}
