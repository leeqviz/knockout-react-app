import { useRouter } from './use-router';

export function useRouterUtils() {
  const {
    generatePath,
    createHref,
    resolveRoute,
    hasRoute,
    isActive,
    isExact,
  } = useRouter();
  return {
    generatePath,
    createHref,
    resolveRoute,
    hasRoute,
    isActive,
    isExact,
  };
}
