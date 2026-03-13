import { ErrorBoundary } from '@/lib/react/components/error-boundary';
import { RouterProvider } from '@/lib/react/components/routing';
import type { RouterData } from '@/types/router';
import { DatepickerContainer } from './components/datepicker-container';

export interface DatepickerEntryPointProps {
  router: RouterData | null;
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
