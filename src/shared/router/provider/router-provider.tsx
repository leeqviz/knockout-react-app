import type { PropsWithChildren } from 'react';
import { RouterContext } from '../context';
import type { RouterSnapshot } from '../types';

interface RouterProviderProps extends PropsWithChildren {
  value: RouterSnapshot | null;
}

export function RouterProvider({ children, value }: RouterProviderProps) {
  console.log('Router: ', value);
  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}
