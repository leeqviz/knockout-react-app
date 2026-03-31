import type { NavigationLocation } from '../types';
import { useRouter } from './use-router';

export type NavigationState = 'idle' | 'loading';

export interface Navigation {
  state: NavigationState;
  location: NavigationLocation | null;
}

export function useNavigation(): Navigation {
  const { isNavigating, pendingLocation } = useRouter().locationAPI;

  return {
    state: isNavigating ? 'loading' : 'idle',
    location: pendingLocation,
  };
}
