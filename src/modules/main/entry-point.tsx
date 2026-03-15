import { ErrorBoundary } from '@/lib/react/components/error-boundary';
import { RouterProvider } from '@/lib/react/components/routing';
import type { RouterSnapshot } from '@/types/router';
import { MainContainer } from './components/main-container';

export interface MainEntryPointProps {
  router: RouterSnapshot | null;
}

export function MainEntryPoint({ router }: MainEntryPointProps) {
  console.log('MainEntryPoint router: ', router);
  return (
    <ErrorBoundary name="Main Module">
      <RouterProvider value={router}>
        <MainContainer />
      </RouterProvider>
    </ErrorBoundary>
  );
}
