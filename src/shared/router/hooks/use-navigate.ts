import { useCallback } from 'react';
import type { NavigateOptions, RouteParams, RouteSearchParams } from '../types';
import { useRouter } from './use-router';

export function useNavigate() {
  const { locationAPI, routeAPI } = useRouter();

  const navigateTo = useCallback(
    (
      name: string,
      params?: RouteParams,
      searchParams?: RouteSearchParams,
      hash?: string,
      options?: NavigateOptions,
    ) =>
      locationAPI.navigate(
        routeAPI.generatePath(name, params, searchParams, hash),
        options,
      ),
    [locationAPI, routeAPI],
  );

  return {
    navigateTo,
    navigate: locationAPI.navigate,
    navigateExternal: locationAPI.navigateExternal,
    back: locationAPI.back,
    forward: locationAPI.forward,
    go: locationAPI.go,
  };
}
