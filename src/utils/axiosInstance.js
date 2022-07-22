import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);
export default axiosInstance;