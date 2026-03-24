import { useRouter } from './use-router';

export function useRouterUtils() {
  const { buildPath, createHref, resolveRoute, hasRoute } = useRouter();
  return { buildPath, createHref, resolveRoute, hasRoute };
}
