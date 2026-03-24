import { useRouter } from './use-router';

export function useRoute<
  TMeta extends Record<string, unknown> = Record<string, unknown>,
>() {
  return useRouter<TMeta>().route;
}
