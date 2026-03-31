import type { RouteParams } from '../types';
import { useRouter } from './use-router';

export function useParams<T extends RouteParams = RouteParams>(): T {
  return useRouter().params as T;
}
