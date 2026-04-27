import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Portfolio service.
 *
 * Manages portfolio items including image uploads via multipart/form-data.
 * All routes require authentication — the token is attached
 * automatically by the Axios request interceptor.
 */
export const PortfolioService = {
  /**
   * Fetch all portfolio items.
   *
   * @returns {Promise<object[]>}
   */
  async getAll() {
    return apiClient.get(ENDPOINTS.PORTFOLIO.BASE);
  },

  /**
   * Create a new portfolio item.
   *
   * @param {FormData | object} data — pass a FormData directly or a plain
   *   object which will be converted automatically via `buildFormData`.
   * @returns {Promise<object>}
   */
  async create(data) {
    const formData = data instanceof FormData ? data : buildFormData(data);

    return apiClient.post(ENDPOINTS.PORTFOLIO.BASE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  /**
   * Update an existing portfolio item.
   *
   * @param {number | string} id
   * @param {FormData | object} data
   * @returns {Promise<object>}
   */
  async update(id, data) {
    const formData = data instanceof FormData ? data : buildFormData(data);

    return apiClient.put(ENDPOINTS.PORTFOLIO.BY_ID(id), formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  /**
   * Delete a portfolio item.
   *
   * @param {number | string} id
   * @returns {Promise<object>}
   */
  async remove(id) {
    return apiClient.delete(ENDPOINTS.PORTFOLIO.BY_ID(id));
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Convert a plain object into a FormData instance suitable
 * for the portfolio endpoint.
 *
 * Expected shape:
 * ```
 * {
 *   image: File,
 *   name: string,
 *   tags: string[],
 *   link: string,
 *   industry_id: number,
 *   revenue_goal_id: number,
 *   capability_id: number,
 *   business_problem_id: number,
 * }
 * ```
 *
 * @param {object} data
 * @returns {FormData}
 */
function buildFormData(data) {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (key === 'tags' && Array.isArray(value)) {
      // Backend expects a JSON string for the tags array
      formData.append(key, JSON.stringify(value));
    } else if (value instanceof File || value instanceof Blob) {
      formData.append(key, value);
    } else {
      formData.append(key, String(value));
    }
  });

  return formData;
}
