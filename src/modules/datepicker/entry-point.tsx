import { ErrorBoundary } from '@/lib/react/components/error-boundary';
import { RouterProvider } from '@/lib/react/components/routing';
import type { RouterContextValue } from '@/lib/react/contexts/routing';
import { DatepickerContainer } from './components/datepicker-container';

export interface DatepickerEntryPointProps {
  router: RouterContextValue | null;
}

export function DatepickerEntryPoint({ router }: DatepickerEntryPointProps) {
  return (
    <ErrorBoundary name="Datepicker Module">
      <RouterProvider value={router}>
        <DatepickerContainer />
      </RouterProvider>
    </ErrorBoundary>
  );
}
