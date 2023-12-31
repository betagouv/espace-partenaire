import axios from 'axios';
import { OidcClient } from '../types';
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL ?? '';

export const backendClient = {
  getKeys,
  getList,
  postOidcClient,
  getDashboard,
  getDashboardItem,
};

async function getKeys() {
  const response = await axios.get(VITE_BASE_URL + '/keys');
  return response.data;
}

async function getList() {
  const response = await axios.get(VITE_BASE_URL + '/list');
  return response.data;
}

async function getDashboard() {
  const response = await axios.get(VITE_BASE_URL + '/oidc-clients/');
  return response.data;
}

async function getDashboardItem(id: string) {
  const response = await axios.get(VITE_BASE_URL + '/oidc-clients/' + id);
  return response.data;
}

async function postOidcClient(data: OidcClient) {
  return await axios.post(VITE_BASE_URL + '/oidc-clients', data);
}
