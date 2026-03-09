import {
  RouterContext,
  type RouterContextValue,
} from '@/lib/react/contexts/routing';
import { useContext } from 'react';

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);

  if (!context) throw new Error('Router context is empty');

  return context;
}
