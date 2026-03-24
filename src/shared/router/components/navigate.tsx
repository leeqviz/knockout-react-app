import { useLayoutEffect } from 'react';
import { useNavigate } from '../hooks';
import type { To } from '../types';
import { toPath } from '../utils';

export function Navigate({
  to,
  replace = false,
  state,
}: {
  to: To;
  replace?: boolean;
  state?: unknown;
}) {
  const { navigate } = useNavigate();

  useLayoutEffect(() => {
    navigate(toPath(to), { replace, state: state ?? null });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
