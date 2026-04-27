import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Authentication service.
 *
 * Handles login, token refresh, password recovery,
 * and client-side token management.
 */
export const AuthService = {
  /**
   * Authenticate a user with email & password.
   * Stores the JWT in localStorage on success.
   *
   * @param {{ email: string, password: string }} credentials
   * @returns {Promise<{ success: boolean, token: string, user: object }>}
   */
  async login(credentials) {
    const data = await apiClient.post(ENDPOINTS.AUTH.LOGIN, credentials);

    if (data?.token && typeof window !== 'undefined') {
      localStorage.setItem('auth_token', data.token);
    }

    return data;
  },

  /**
   * Refresh an expired session token.
   *
   * @param {string} refreshToken
   * @returns {Promise<object>}
   */
  async refreshToken(refreshToken) {
    const data = await apiClient.post(ENDPOINTS.AUTH.REFRESH_TOKEN, { refreshToken });

    if (data?.token && typeof window !== 'undefined') {
      localStorage.setItem('auth_token', data.token);
    }

    return data;
  },

  /**
   * Initiate the password recovery flow.
   *
   * @param {string} email
   * @returns {Promise<object>}
   */
  async forgotPassword(email) {
    return apiClient.post(ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  },

  /**
   * Complete password recovery by setting a new password.
   *
   * @param {{ token: string, newPassword: string }} payload
   * @returns {Promise<object>}
   */
  async resetPassword(payload) {
    return apiClient.post(ENDPOINTS.AUTH.RESET_PASSWORD, payload);
  },

  // ── Client-side helpers ───────────────────────────────────────────────────

  /**
   * Remove the stored token (client-side logout).
   */
  logout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
  },

  /**
   * Read the current auth token.
   *
   * @returns {string | null}
   */
  getToken() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  },

  /**
   * Check whether the user has a stored token.
   *
   * @returns {boolean}
   */
  isAuthenticated() {
    return !!this.getToken();
  },
};
