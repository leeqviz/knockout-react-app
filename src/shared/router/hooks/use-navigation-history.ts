import { useEffect, useState } from 'react';
import type { NavigationLocation } from '../types';
import { useRouter } from './use-router';

export function useNavigationHistory(depth: number = 20) {
  const [stack, setStack] = useState<NavigationLocation[]>([]);
  const { location, locationAPI } = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStack((prev) => {
      if (locationAPI.navigationType === 'push')
        return [...prev, location].slice(-depth);
      if (locationAPI.navigationType === 'pop') return prev.slice(0, -1);
      return [...prev.slice(0, -1), location];
    });
  }, [
    depth,
    location,
    location.pathname,
    location.search,
    locationAPI.navigationType,
  ]);

  return {
    stack,
    canGoBack: stack.length > 1,
    previous: stack[stack.length - 2] ?? null,
  };
}
