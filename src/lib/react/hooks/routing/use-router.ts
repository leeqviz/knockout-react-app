import { RouterContext } from '@/lib/react/contexts/routing';
import type { RouterData } from '@/types/router';
import { useContext } from 'react';

export function useRouter(): RouterData {
  const context = useContext(RouterContext);

  if (!context) throw new Error('Router context is empty');

  return context;
}
