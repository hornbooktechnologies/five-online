import apiClient from '../client';
import { ENDPOINTS } from '../endpoints';

/**
 * Valid master types accepted by the backend.
 * @type {readonly string[]}
 */
export const MASTER_TYPES = Object.freeze([
  'industry',
  'revenue-goal',
  'capability',
  'business-problem',
]);

/**
 * Master-data service.
 *
 * Generic CRUD for lookup tables (Industry, Revenue Goal, etc.).
 * All routes require authentication — the token is attached
 * automatically by the Axios request interceptor.
 */
export const MastersService = {
  /**
   * Fetch all items for a given master type.
   *
   * @param {'industry' | 'revenue-goal' | 'capability' | 'business-problem'} type
   * @returns {Promise<object[]>}
   */
  async getAll(type) {
    return apiClient.get(ENDPOINTS.MASTERS.BASE(type));
  },

  /**
   * Create a new master item.
   *
   * @param {'industry' | 'revenue-goal' | 'capability' | 'business-problem'} type
   * @param {{ name: string, status?: string }} data
   * @returns {Promise<object>}
   */
  async create(type, data) {
    return apiClient.post(ENDPOINTS.MASTERS.BASE(type), data);
  },

  /**
   * Update an existing master item.
   *
   * @param {'industry' | 'revenue-goal' | 'capability' | 'business-problem'} type
   * @param {number | string} id
   * @param {object} data
   * @returns {Promise<object>}
   */
  async update(type, id, data) {
    return apiClient.put(ENDPOINTS.MASTERS.BY_ID(type, id), data);
  },

  /**
   * Delete a master item.
   *
   * @param {'industry' | 'revenue-goal' | 'capability' | 'business-problem'} type
   * @param {number | string} id
   * @returns {Promise<object>}
   */
  async remove(type, id) {
    return apiClient.delete(ENDPOINTS.MASTERS.BY_ID(type, id));
  },
};
