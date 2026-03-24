import { useCallback } from 'react';
import type { To } from '../types';
import { isModifiedEvent, toPath } from '../utils';
import { useNavigate } from './use-navigate';

export function useLinkClickHandler(
  to: To,
  options?: { replace?: boolean; state?: unknown },
) {
  const { navigate } = useNavigate();
  return useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!e.defaultPrevented && e.button === 0 && !isModifiedEvent(e)) {
        e.preventDefault();
        navigate(toPath(to), options);
      }
    },
    [to, options, navigate],
  );
}
