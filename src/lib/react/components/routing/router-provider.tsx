import {
  RouterContext,
  type RouterContextValue,
} from '@/lib/react/contexts/routing';
import type { PropsWithChildren } from 'react';

interface RouterProviderProps extends PropsWithChildren {
  value: RouterContextValue | null;
}

export function RouterProvider({ children, value }: RouterProviderProps) {
  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}
