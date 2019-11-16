import { apiCall } from '@/api/core';

export async function getTales() {
  let url = '/tales';
  return (await apiCall.get(url)).data;
}
