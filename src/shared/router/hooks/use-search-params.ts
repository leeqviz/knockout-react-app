// useSearchParams.ts
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
  const router = useRouter();

  const actions: SearchParamActions = {
    set: router.setSearchParam,
    append: router.appendSearchParam,
    delete: router.deleteSearchParam,
    patch: router.patchSearchParams,
    replaceAll: router.replaceAllSearchParams,
    get: router.getSearchParam,
    getAll: router.getAllSearchParams,
    has: router.hasSearchParam,
  };

  return [router.searchParams, actions];
}
