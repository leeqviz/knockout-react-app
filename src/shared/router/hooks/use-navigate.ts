import { useRouter } from './use-router';

export function useNavigate() {
  const { navigate, navigateExternal, back, forward, go } = useRouter();
  return {
    navigate,
    navigateExternal,
    back,
    forward,
    go,
  };
}
