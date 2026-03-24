import type { RouteParams } from '../types';
import { matchRoute } from '../utils';
import { useRouter } from './use-router';

export function useMatch(pattern: string): RouteParams | null {
  const { location } = useRouter();
  return matchRoute(pattern, location.pathname, false) ?? null;
}
