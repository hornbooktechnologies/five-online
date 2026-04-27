'use client';

import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * useApi — generic React hook for calling any async service function
 * while managing loading, error, and data states.
 *
 * @template T
 * @param {(...args: any[]) => Promise<T>} serviceFunction
 *   The async service method to call (e.g. `CaseStudyService.getAll`).
 * @param {object} [options]
 * @param {boolean} [options.immediate=false]
 *   If `true`, the service function is called on mount with no arguments.
 *
 * @returns {{
 *   data: T | null,
 *   loading: boolean,
 *   error: { message: string, status: number | null, data: any } | null,
 *   execute: (...args: any[]) => Promise<T | undefined>,
 *   reset: () => void,
 * }}
 *
 * @example
 * // Fetch on mount
 * const { data, loading, error } = useApi(CaseStudyService.getAll, { immediate: true });
 *
 * @example
 * // Fetch on demand
 * const { data, loading, error, execute } = useApi(AuthService.login);
 * const handleSubmit = () => execute({ email, password });
 */
export function useApi(serviceFunction, { immediate = false } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Track mounted state to avoid state updates after unmount
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  /**
   * Execute the service function with the given arguments.
   * Returns the response data on success, `undefined` on failure.
   */
  const execute = useCallback(
    async (...args) => {
      try {
        setLoading(true);
        setError(null);

        const result = await serviceFunction(...args);

        if (mountedRef.current) {
          setData(result);
        }

        return result;
      } catch (err) {
        if (mountedRef.current) {
          setError({
            message: err?.message || 'Something went wrong.',
            status: err?.status ?? null,
            data: err?.data ?? null,
          });
        }

        return undefined;
      } finally {
        if (mountedRef.current) {
          setLoading(false);
        }
      }
    },
    [serviceFunction],
  );

  /**
   * Reset state back to initial values.
   */
  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  // Auto-execute on mount when `immediate` is true
  useEffect(() => {
    if (immediate) {
      execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [immediate]);

  return { data, loading, error, execute, reset };
}
