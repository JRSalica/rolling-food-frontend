import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://rolling-food.herokuapp.com/api/',
});

export default axiosConfig;
