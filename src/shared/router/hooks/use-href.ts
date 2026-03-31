import type { To } from '../types';
import { toPath } from '../utils';
import { useRouter } from './use-router';

export function useHref(to: To): string {
  return useRouter().routeAPI.createHref(toPath(to));
}
