import { LazyLoadingFallback } from '@/lib/react/components/lazy-loading';
import { lazy, Suspense } from 'react';
import type { MainEntryPointProps } from './entry-point';

const LazyMainEntryPoint = lazy(() =>
  import('./entry-point').then((res) => ({
    default: res.MainEntryPoint,
  })),
);

export function MainEntryPointLazy(props: MainEntryPointProps) {
  return (
    <Suspense fallback={<LazyLoadingFallback />}>
      <LazyMainEntryPoint {...props} />
    </Suspense>
  );
}
