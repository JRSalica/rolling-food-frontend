import axiosConfig from '../config/axios';

const setAuthTokenAxios = token => {
  if (token) {
    axiosConfig.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosConfig.defaults.headers.common.Authorization;
  }
};

export default setAuthTokenAxios;
