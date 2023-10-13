import axios from 'axios';
import { OidcClient } from '../types';

export const backendClient = {
  getKeys,
  getList,
  postOidcClient,
};

async function getKeys() {
  const response = await axios.get(import.meta.env.VITE_BASE_URL + '/keys');
  return response.data;
}

async function getList() {
  const response = await axios.get(import.meta.env.VITE_BASE_URL + '/list');
  return response.data;
}

async function postOidcClient(data: OidcClient) {
  return await axios.post(
    import.meta.env.VITE_BASE_URL + '/oidc-clients',
    data
  );
}
