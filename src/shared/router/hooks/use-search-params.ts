import type { NavigateOptions, RouteSearchParams } from '../types';
import { useRouter } from './use-router';

interface SearchParamActions {
  set: (key: string, value: string, options?: NavigateOptions) => void;
  append: (key: string, value: string, options?: NavigateOptions) => void;
  delete: (key: string, value?: string, options?: NavigateOptions) => void;
  patch: (
    patch: Record<string, string | string[] | null | undefined>,
    options?: NavigateOptions,
  ) => void;
  replaceAll: (params: RouteSearchParams, options?: NavigateOptions) => void;
  get: (key: string) => string | null;
  getAll: (key: string) => string[];
  has: (key: string) => boolean;
}

export function useSearchParams(): [RouteSearchParams, SearchParamActions] {
  const { searchParamsAPI, searchParams } = useRouter();

  return [
    searchParams,
    {
      set: searchParamsAPI.setSearchParam,
      append: searchParamsAPI.appendSearchParam,
      delete: searchParamsAPI.deleteSearchParam,
      patch: searchParamsAPI.patchSearchParams,
      replaceAll: searchParamsAPI.replaceAllSearchParams,
      get: searchParamsAPI.getSearchParam,
      getAll: searchParamsAPI.getAllSearchParams,
      has: searchParamsAPI.hasSearchParam,
    },
  ];
}
