import axios from 'axios';
import {APP_CONFIG} from '../config/settings';
import {getToken} from '../utils/storage';

const axiosClient = async () => {
  const _token = await getToken();
  const {BASE_URL} = APP_CONFIG;
  axios.defaults.baseURL = BASE_URL;
  console.log(_token);
  // if (_token !== undefined) {
  axios.defaults.headers.get.Authorization = `Bearer ${_token}`;
  axios.defaults.headers.post.Authorization = `Bearer ${_token}`;
  axios.defaults.headers.delete.Authorization = `Bearer ${_token}`;
  axios.defaults.headers.patch.Authorization = `Bearer ${_token}`;
  axios.defaults.headers.put.Authorization = `Bearer ${_token}`;
  axios.defaults.headers.common.Authorization = `Bearer ${_token}`;
  // }
  return axios;
};

export default axiosClient;
