import { RouterProvider, type RouterSnapshot } from '@/shared/router';
import { ErrorBoundary } from '@/shared/ui/error-boundary';

export interface NotFoundEntryPointProps {
  router: RouterSnapshot | null;
}

export function NotFoundEntryPoint({ router }: NotFoundEntryPointProps) {
  return (
    <ErrorBoundary name="Not Found Module">
      <RouterProvider value={router}>
        <div>
          <h2>404</h2>
          <p>Page not found</p>
        </div>
      </RouterProvider>
    </ErrorBoundary>
  );
}
