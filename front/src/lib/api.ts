import axios from 'axios';

const api = {
  getKeys,
  getList,
};

const BASE_URL = 'http://localhost:3000';

async function getKeys() {
  const response = await axios.get(BASE_URL + '/keys');
  return response.data;
}

async function getList() {
  const response = await axios.get(BASE_URL + '/list');
  return response.data;
}

export { api };
