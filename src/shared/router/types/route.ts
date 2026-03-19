import { ResolveResultType } from '../route';
import type { RouteMiddleware } from './middleware';

export interface RouteConfig {
  pattern: string;
  component: string;
  middlewares?: RouteMiddleware[] | undefined;
}

export type RouteParams = Record<string, string>;

export type SearchParamsPatch = Record<
  string,
  string | number | boolean | null | undefined
>;

export interface ResolvedRouteState {
  pathname: string;
  search: string;
  component: string;
  params: RouteParams;
  searchParams: RouteParams;
  state: unknown;
}

export type ResolveResult =
  | { type: typeof ResolveResultType.Blocked; reason?: string }
  | { type: typeof ResolveResultType.Redirect; to: string; replace?: boolean }
  | { type: typeof ResolveResultType.Rewrite; to: string; replace?: boolean }
  | { type: typeof ResolveResultType.Resolved; value: ResolvedRouteState }
  | { type: typeof ResolveResultType.Error; error: Error };
