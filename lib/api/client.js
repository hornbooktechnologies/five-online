import axios from 'axios';

/**
 * Base API configuration
 */
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TIMEOUT = 15000; // 15 seconds

/**
 * Create a pre-configured Axios instance.
 * All service modules import this single instance so that
 * interceptors, headers, and base URL are shared globally.
 */
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ─── Request Interceptor ────────────────────────────────────────────────────────
apiClient.interceptors.request.use(
  (config) => {
    // Attach auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ─── Response Interceptor ───────────────────────────────────────────────────────
apiClient.interceptors.response.use(
  // Unwrap the `data` envelope so callers get the payload directly
  (response) => response.data,

  (error) => {
    const normalizedError = normalizeError(error);

    // Auto-logout on 401 (token expired / invalid)
    if (normalizedError.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      // Optionally redirect to login:
      // window.location.href = '/login';
    }

    return Promise.reject(normalizedError);
  },
);

// ─── Error Normaliser ───────────────────────────────────────────────────────────

/**
 * Produces a consistent error shape regardless of whether the
 * failure was a network issue, a timeout, or a server error.
 *
 * @param {import('axios').AxiosError} error
 * @returns {{ message: string, status: number | null, data: any }}
 */
function normalizeError(error) {
  if (error.response) {
    // Server responded with an error status
    return {
      message:
        error.response.data?.message ||
        error.response.data?.error ||
        error.response.statusText ||
        'An unexpected server error occurred.',
      status: error.response.status,
      data: error.response.data,
    };
  }

  if (error.request) {
    // Request was sent but no response received
    return {
      message: 'No response from server. Please check your internet connection.',
      status: null,
      data: null,
    };
  }

  // Something went wrong setting up the request
  return {
    message: error.message || 'An unexpected error occurred.',
    status: null,
    data: null,
  };
}

export default apiClient;
