import { RouterProvider, type RouterSnapshot } from '@/shared/router';
import { ErrorBoundary } from '@/shared/ui/error-boundary';
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
