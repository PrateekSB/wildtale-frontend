import { apiCall } from '@/api/core';

const baseUrl = 'https://wildtale-spring-app.herokuapp.com/api';

export async function getTales() {
  let url = baseUrl + '/tales';
  return (await apiCall.get(url)).data;
}

export async function postFileLink(file) {
  let url = baseUrl + '/tales/files/upload';
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  const formData = new FormData();
  formData.set('file', file[0]);
  const response = await apiCall.post(url, formData, config);
  return response.data;
}

export async function postStory(story) {
  let url = baseUrl + '/tales';
  const response = await apiCall.post(url, story);
  return response.data;
}
