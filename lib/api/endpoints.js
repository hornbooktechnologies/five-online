/**
 * Centralised endpoint map.
 *
 * Every API path lives here so service modules never hardcode strings.
 * Functions are used where the URL contains dynamic segments.
 *
 * Valid master types: 'industry' | 'revenue-goal' | 'capability' | 'business-problem'
 */

export const ENDPOINTS = {
  // ── Authentication ──────────────────────────────────────────────────────────
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH_TOKEN: '/auth/refresh-token',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },

  // ── Master Data (lookup tables) ─────────────────────────────────────────────
  MASTERS: {
    BASE: (type) => `/masters/${type}`,
    BY_ID: (type, id) => `/masters/${type}/${id}`,
  },

  // ── Portfolio ───────────────────────────────────────────────────────────────
  PORTFOLIO: {
    BASE: '/portfolio',
    BY_ID: (id) => `/portfolio/${id}`,
  },

  // ── Case Studies ────────────────────────────────────────────────────────────
  CASE_STUDIES: {
    BASE: '/case-studies',
    BY_SLUG: (slug) => `/case-studies/${slug}`,
    BY_ID: (id) => `/case-studies/id/${id}`,
    PROTECTED: (id) => `/case-studies/${id}`,
  },
};
