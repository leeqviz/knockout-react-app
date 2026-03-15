import { RouterContext } from '@/lib/react/contexts/routing';
import type { RouterSnapshot } from '@/types/router';
import type { PropsWithChildren } from 'react';

interface RouterProviderProps extends PropsWithChildren {
  value: RouterSnapshot | null;
}

export function RouterProvider({ children, value }: RouterProviderProps) {
  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}
