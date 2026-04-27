import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Case Study service.
 *
 * Covers both public (GET) and protected (POST / PUT / DELETE) operations.
 * Auth is handled automatically by the Axios request interceptor for
 * protected routes.
 */
export const CaseStudyService = {
  // ── Public endpoints ────────────────────────────────────────────────────────

  /**
   * Fetch all case studies (minimal listing data).
   *
   * @returns {Promise<object[]>}
   */
  async getAll() {
    return apiClient.get(ENDPOINTS.CASE_STUDIES.BASE);
  },

  /**
   * Fetch a single case study by its URL slug.
   *
   * @param {string} slug — e.g. "garware-hi-tech"
   * @returns {Promise<object>}
   */
  async getBySlug(slug) {
    return apiClient.get(ENDPOINTS.CASE_STUDIES.BY_SLUG(slug));
  },

  /**
   * Fetch a single case study by its numeric ID.
   *
   * @param {number | string} id
   * @returns {Promise<object>}
   */
  async getById(id) {
    return apiClient.get(ENDPOINTS.CASE_STUDIES.BY_ID(id));
  },

  // ── Protected endpoints ─────────────────────────────────────────────────────

  /**
   * Create a new case study.
   *
   * @param {object} data — full case study payload (see API docs)
   * @returns {Promise<object>}
   */
  async create(data) {
    return apiClient.post(ENDPOINTS.CASE_STUDIES.BASE, data);
  },

  /**
   * Update an existing case study.
   *
   * @param {number | string} id
   * @param {object} data
   * @returns {Promise<object>}
   */
  async update(id, data) {
    return apiClient.put(ENDPOINTS.CASE_STUDIES.PROTECTED(id), data);
  },

  /**
   * Delete a case study.
   *
   * @param {number | string} id
   * @returns {Promise<object>}
   */
  async remove(id) {
    return apiClient.delete(ENDPOINTS.CASE_STUDIES.PROTECTED(id));
  },
};
