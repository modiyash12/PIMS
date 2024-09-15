import axios from "axios";
import { useNavigate } from "react-router-dom";

const getToken = () => sessionStorage.getItem("authToken");

const api = axios.create({
  baseURL: "http://localhost:8080/", 
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      const navigate = useNavigate();
      sessionStorage.clear(); 
      navigate("/");
    }
    return Promise.reject(error);
  }
);

export default api;

