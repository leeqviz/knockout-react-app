import { RouterContext } from '@/lib/react/contexts/routing';
import type { RouterData } from '@/types/router';
import type { PropsWithChildren } from 'react';

interface RouterProviderProps extends PropsWithChildren {
  value: RouterData | null;
}

export function RouterProvider({ children, value }: RouterProviderProps) {
  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}
