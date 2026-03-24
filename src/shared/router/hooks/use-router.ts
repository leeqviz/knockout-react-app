import { useContext } from 'react';
import { RouterContext } from '../lib';
import type { RouterSnapshot } from '../types';

export function useRouter<
  TMeta extends Record<string, unknown> = Record<string, unknown>,
>(): RouterSnapshot<TMeta> {
  const context = useContext(RouterContext) as RouterSnapshot<TMeta> | null;

  if (!context)
    throw new Error(
      'Router context is empty. useRouter hook must be used inside <RouterProvider> component',
    );

  return context;
}
