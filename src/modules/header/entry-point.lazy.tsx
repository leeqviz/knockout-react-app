import { LazyLoadingFallback } from '@/shared/ui/fallback';
import { lazy, Suspense } from 'react';
import type { HeaderEntryPointProps } from './entry-point';

const LazyHeaderEntryPoint = lazy(() =>
  import('./entry-point').then((res) => ({
    default: res.HeaderEntryPoint,
  })),
);

export function HeaderEntryPointLazy(props: HeaderEntryPointProps) {
  return (
    <Suspense fallback={<LazyLoadingFallback />}>
      <LazyHeaderEntryPoint {...props} />
    </Suspense>
  );
}
