import axios from 'axios';
import { triggerLogout } from './authEventBus';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor - tu Buoi 7, giu nguyen
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('crs_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor - Buoi 8:
// Khi nhan HTTP 401, goi triggerLogout() de thong bao cho AuthContext
// xoa state, xoa localStorage va chuyen ve /login.
// KHONG xu ly truc tiep o day de dam bao React state dong bo.
axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        triggerLogout();
      }
      return Promise.reject(error);
    }
);

export default axiosClient;