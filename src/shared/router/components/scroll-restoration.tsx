import { useEffect } from 'react';
import { useRouter } from '../hooks';

export function ScrollRestoration() {
  const { location } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}
