import type {
  NavigationLocation,
  ParsedURL,
  RouteSearchParams,
  To,
} from '../types';

export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

export function sanitizePath(path: string): string {
  return normalizePath(path.startsWith('/') ? path : `/${path}`);
}

export function normalizeBase(base: string): string {
  if (!base || base === '/') return '';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

export function addBase(path: string, base?: string): string {
  if (!base) return path;
  return base + path;
}

export function stripBase(path: string, base?: string): string {
  if (!base) return path;
  if (path === base) return '/';
  if (path.startsWith(base + '/')) return path.slice(base.length);
  return path;
}

export function normalizeFullPath(fullPath: string, base?: string): string {
  const url = new URL(fullPath, window.location.origin);
  return normalizePath(stripBase(url.pathname, base)) + url.search;
}

export function getFullPath(base?: string): string {
  return (
    normalizePath(stripBase(window.location.pathname, base)) +
    window.location.search
  );
}

export function parseUrl(url: URL): ParsedURL {
  const searchParams: RouteSearchParams = {};

  url.searchParams.forEach((value, key) => {
    const existing = searchParams[key];
    if (existing === undefined) searchParams[key] = value;
    else if (Array.isArray(existing)) existing.push(value);
    else searchParams[key] = [existing, value];
  });

  return {
    pathname: normalizePath(url.pathname),
    search: url.search,
    searchParams,
    hash: url.hash,
  };
}

export function resolveTo(
  path: string,
  currentPathname: string,
  currentSearch: string,
): URL {
  if (!path) throw new Error('Path is empty');

  const origin = window.location.origin;

  if (path.startsWith('/')) return new URL(path, origin);
  if (path.startsWith('?')) return new URL(`${currentPathname}${path}`, origin);
  if (path.startsWith('#'))
    return new URL(`${currentPathname}${currentSearch}${path}`, origin);

  return new URL(
    path,
    `${origin}${
      currentPathname.endsWith('/') ? currentPathname : `${currentPathname}/`
    }`,
  );
}

export function toPath(to: To): string {
  if (typeof to === 'string') return to;
  return to.pathname + (to.search ?? '') + (to.hash ?? '');
}

export function mapLocation(
  url: { pathname: string; search: string },
  hash: string,
  state: unknown,
): NavigationLocation {
  return {
    pathname: url.pathname,
    search: url.search,
    hash,
    state,
  };
}
