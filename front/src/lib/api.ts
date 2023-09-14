import axios from 'axios';

const api = {
  getKeys,
  getList,
};

async function getKeys() {
  const response = await axios.get(process.env.REACT_APP_BASE_URL + '/keys');
  return response.data;
}

async function getList() {
  const response = await axios.get(process.env.REACT_APP_BASE_URL + '/list');
  return response.data;
}

export { api };
