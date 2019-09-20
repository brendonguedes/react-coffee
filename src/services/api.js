import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/adfonzar/react-coffee',
});

export default api;
