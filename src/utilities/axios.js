import axios from "axios";
import { useAuthStore } from "../stores/auth";

let URL = "http://127.0.0.1:8000/api/";
const axiosApi = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const axiosAuthApi = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
axiosAuthApi.interceptors.request.use((config) => {
  const userStore = useAuthStore();
  const token = userStore.token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
export { axiosApi, axiosAuthApi };
