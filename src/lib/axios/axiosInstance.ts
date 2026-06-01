import { API_URL } from "@/lib/constants/env";
import { useAuthStore } from "@/store/authStore";
import axios from "axios";

/**
 * Centered Axios instance for all API communications.
 * Configured with base URL, timeouts, and automated Auth injection.
 */
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 50000, // 50 seconds to accommodate heavy image uploads/processing
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Request Interceptor:
 * Automatically injects the JWT/Sanctum Bearer token into every outgoing request.
 * Includes a safety check for Server-Side Rendering (SSR) environments.
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Prevent execution on the server if using Next.js/SSR without a window object
    if (typeof window === "undefined") return config;

    try {
      // Pull the current token directly from the Zustand store
      const token = useAuthStore.getState().access_token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // Log errors without breaking the request chain
      console.error("Axios Auth Interceptor Error:", error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * Response Interceptor (Optional but Recommended):
 * Use this to catch global errors like 401 Unauthorized to trigger logouts.
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the backend returns 401, the token is likely expired or invalid
    if (error.response?.status === 401) {
      // Optional: useAuthStore.getState().logout();
      console.warn("Session expired. Redirecting or refreshing token...");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
