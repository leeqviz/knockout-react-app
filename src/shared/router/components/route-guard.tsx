import { useEffect } from 'react';
import { useRouter } from '../hooks';

export interface RouteGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  redirect?: string;
}

export function RouteGuard({
  children,
  redirect = '/login',
  fallback = null,
}: RouteGuardProps) {
  const { routeAPI, locationAPI, location } = useRouter();
  const canAccess = routeAPI.resolveRoute(location.pathname) !== null;

  useEffect(() => {
    if (!canAccess)
      locationAPI.navigate(redirect, {
        replace: true,
        state: { from: location.pathname },
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canAccess]);

  if (!canAccess) return <>{fallback}</>;
  return <>{children}</>;
}
