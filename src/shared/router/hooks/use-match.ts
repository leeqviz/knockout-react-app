import type { RouteParams } from '../types';
import { matchRoute } from '../utils';
import { useRouter } from './use-router';

export interface MatchResult {
  params: RouteParams;
  pathname: string;
  pathnameBase: string;
  pattern: string;
}

export function useMatch(pattern: string): MatchResult | null {
  const { location } = useRouter();
  const params = matchRoute(pattern, location.pathname, false);

  if (!params) return null;

  const wildcardValue = params['*'];
  const pathnameBase =
    wildcardValue !== undefined
      ? location.pathname
          .slice(0, location.pathname.length - wildcardValue.length)
          .replace(/\/$/, '') || '/'
      : location.pathname;

  return {
    params,
    pathname: location.pathname,
    pathnameBase,
    pattern,
  };
}
