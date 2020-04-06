import axios from 'axios';

const handler = axios.create({
  baseURL: '/base/url',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default handler;