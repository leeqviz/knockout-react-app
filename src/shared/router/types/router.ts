export interface RouteMiddlewareContext {
  navigate: (path: string, options?: NavigateOptions) => void;
  fullPath: string;
  pathname: string;
  search: string;
  state: unknown;
}

export type RouteMiddleware = (
  context: RouteMiddlewareContext,
) => boolean | string | void;

export interface RouteConfig {
  pattern: string;
  component: string;
  middlewares?: RouteMiddleware[] | undefined;
}

export interface RouterOptions {
  routes?: RouteConfig[];
  notFoundComponent?: string;
  middlewares?: RouteMiddleware[] | undefined;
}

export type RouteParams = Record<string, string>;

export type SearchParamsPatch = Record<
  string,
  string | number | boolean | null | undefined
>;

export interface NavigateOptions {
  replace?: boolean | undefined;
  state?: unknown;
}

export interface ResolvedRouteState {
  pathname: string;
  search: string;
  component: string;
  params: RouteParams;
  searchParams: RouteParams;
  state: unknown;
}

export type ResolveResult =
  | { type: 'blocked' }
  | { type: 'redirect'; to: string }
  | { type: 'resolved'; value: ResolvedRouteState };

export interface RouterSnapshot {
  navigate: (path: string, options?: NavigateOptions) => void;
  params: RouteParams;
  searchParams: RouteParams;
  location: {
    pathname: string;
    search: string;
    state: unknown;
  };
  setSearchParams: (
    newParams: SearchParamsPatch,
    options?: NavigateOptions,
  ) => void;
}
