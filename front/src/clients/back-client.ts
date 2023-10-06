import axios from 'axios';

const backendClient = {
  getKeys,
  getList,
};

async function getKeys() {
  const response = await axios.get(import.meta.env.VITE_BASE_URL + '/keys');
  return response.data;
}

async function getList() {
  const response = await axios.get(import.meta.env.VITE_BASE_URL + '/list');
  return response.data;
}

export { backendClient };
