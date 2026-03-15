import { RouterContext } from '@/lib/react/contexts/routing';
import type { RouterSnapshot } from '@/types/router';
import { useContext } from 'react';

export function useRouter(): RouterSnapshot {
  const context = useContext(RouterContext);

  if (!context) throw new Error('Router context is empty');

  return context;
}
