import { apiCall } from '@/api/core';

export async function getTales() {
  let url = '/tales';
  return (await apiCall.get(url)).data;
}

export async function getFileLink(files) {
  let url = '/tales/files/upload';
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  console.log(files);
  const response = await apiCall.post(url, { file: files }, config);
  console.log(response);
  return response.data;
}
