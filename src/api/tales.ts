import { apiCall } from '@/api/core';

export async function getTales() {
  let url = '/tales';
  return (await apiCall.get(url)).data;
}

export async function getFileLink(file) {
  let url = '/tales/files/upload';
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const formData = new FormData();
  formData.set('file', file[0]);
  const response = await apiCall.post(url, formData, config);
  return response.data;
}
