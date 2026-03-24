import { useEffect, useId, useRef } from 'react';
import type {
  BlockerFunction,
  BlockerState,
  NavigationLocation,
} from '../types';
import { useRouter } from './use-router';

export interface Blocker {
  state: BlockerState;
  location: NavigationLocation | null;
  proceed: () => void;
  reset: () => void;
}

export function useBlocker<
  TMeta extends Record<string, unknown> = Record<string, unknown>,
>(shouldBlock: boolean | BlockerFunction<TMeta>): Blocker {
  const router = useRouter<TMeta>();
  const id = useId();

  const shouldBlockRef = useRef(shouldBlock);
  useEffect(() => {
    shouldBlockRef.current = shouldBlock;
  });

  useEffect(() => {
    router.setBlocker(id, (to, from) => {
      const fn = shouldBlockRef.current;
      return typeof fn === 'function' ? fn(to, from) : fn;
    });
    return () => router.setBlocker(id, null);
  }, [router, id]);

  return {
    state: router.blockerState,
    location: router.blockedTo,
    proceed: router.proceedBlocked,
    reset: router.resetBlocked,
  };
}
