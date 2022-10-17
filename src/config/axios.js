import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://rollingfoodapi.vercel.app/api/',
});

export default axiosConfig;
