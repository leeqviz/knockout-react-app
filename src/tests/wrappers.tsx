import { RouterProvider } from '@/lib/react/components/routing';
import type { RouterContextValue } from '@/lib/react/contexts/routing';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { mockedRouterContextValue } from './mocks';

export function renderWithRouterContext(
  ui: ReactElement,
  partialRouterContextValue: Partial<RouterContextValue> = {},
) {
  const routerContextValue = {
    ...mockedRouterContextValue,
    ...partialRouterContextValue,
  };
  render(<RouterProvider value={routerContextValue}>{ui}</RouterProvider>);
  return routerContextValue;
}
