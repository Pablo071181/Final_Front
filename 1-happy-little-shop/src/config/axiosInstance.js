import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_EAKON_CMS_API_URL
});

export default axiosInstance;