import type { RouterSnapshot } from '../types';
import { useRouter } from './use-router';

export function useLocation(): RouterSnapshot['location'] {
  return useRouter().location;
}
