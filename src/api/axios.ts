import { useAuthStore } from "@/store/auth.store";
import axios from "axios";

const api = axios.create({
  baseURL: "https://foodsy-api-java-spring-boot-production.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAccessToken = (): string | null => useAuthStore.getState().accessToken;

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.request.use((req) => {
  console.log("➡️ REQUEST:", req.method, req.url, req.data);
  return req;
});

api.interceptors.response.use(
  (res) => {
    // console.log("✅ RESPONSE:", res.status, res.data);
    return res;
  },
  (err) => {
    // console.log("❌ ERROR:", err.message, err.response);
    return Promise.reject(err);
  },
);

export default api;
