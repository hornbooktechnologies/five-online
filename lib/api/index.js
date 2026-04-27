/**
 * API Service Layer — barrel export.
 *
 * Import everything you need from a single path:
 *
 * ```js
 * import { AuthService, CaseStudyService } from '@/lib/api';
 * ```
 */

export { default as apiClient } from './client';
export { ENDPOINTS } from './endpoints';

export { AuthService } from './services/auth.service';
export { MastersService, MASTER_TYPES } from './services/masters.service';
export { PortfolioService } from './services/portfolio.service';
export { CaseStudyService } from './services/caseStudy.service';
