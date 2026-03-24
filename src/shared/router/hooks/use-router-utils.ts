import { useRouter } from './use-router';

export function useRouterUtils() {
  const { buildPath, createHref, resolveRoute, hasRoute, isActive, isExact } =
    useRouter();
  return { buildPath, createHref, resolveRoute, hasRoute, isActive, isExact };
}
