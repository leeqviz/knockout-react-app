import { RouterProvider } from '@/lib/react/components/routing';
import type { RouterSnapshot } from '@/types/router';
import { render } from '@testing-library/react';
import type { ReactElement } from 'react';
import { vi } from 'vitest';

export const mockedRouterContextValue: RouterSnapshot = {
  navigate: vi.fn(),
  params: {},
  location: {
    pathname: '/',
    search: '',
  },
  setSearchParams: vi.fn(),
};

export function renderWithRouterContext(
  ui: ReactElement,
  partialRouterContextValue: Partial<RouterSnapshot> = {},
) {
  const routerContextValue = {
    ...mockedRouterContextValue,
    ...partialRouterContextValue,
  };
  render(<RouterProvider value={routerContextValue}>{ui}</RouterProvider>);
  return routerContextValue;
}
