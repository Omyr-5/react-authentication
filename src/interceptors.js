import axios from "axios";
import { enqueueSnackbar } from "notistack";

axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

const getToken = () => localStorage.getItem("jwtToken");
const clearStorage = () => {
  localStorage.clear();
  window.location = "/";
};

axios.interceptors.request.use((request) => {
  let headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getToken()}`,
  };
  if (window.location.pathname === "/") {
    return request;
  }
  request.headers = headers;
  return request;
});

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    try {
      if (error?.response?.status === 401) {
        if (window.location.pathname !== "/") {
          clearStorage();
        }
      }
      if (error?.response?.status >= 400 && error?.response?.status < 600) {
        throw error;
      }
    } catch (error) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
