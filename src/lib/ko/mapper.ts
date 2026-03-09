import type { RouterContextValue } from '@/lib/react/contexts/routing';
import type { AppViewModel } from './models/app';

export function mapRouterData(appViewModel: AppViewModel): RouterContextValue {
  return {
    navigate: (path: string, options?: { replace?: boolean | undefined }) =>
      appViewModel.navigate(path, options),
    params: appViewModel.currentRouteParams(),
    location: {
      pathname: appViewModel.currentPathname(),
      search: appViewModel.currentSearch(),
    },
    setSearchParams: (newParams: Record<string, string>) => {
      appViewModel.setSearchParams(newParams);
    },
  };
}
