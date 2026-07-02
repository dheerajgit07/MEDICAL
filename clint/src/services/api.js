import axios from 'axios';

// Create an Axios instance with standard configuration
const api = axios.create({
  // Use the environment variable, defaulting to /api if not set.
  // Using the Vite proxy, /api will be routed to http://localhost:8080
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (e.g., to inject auth tokens)
api.interceptors.request.use(
  (config) => {
    // Optional: Get token from localStorage and attach to header
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (e.g., for centralized error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific status codes, like 401 Unauthorized
    // if (error.response && error.response.status === 401) {
    //    // Redirect to login or clear token
    // }
    return Promise.reject(error);
  }
);

export default api;
