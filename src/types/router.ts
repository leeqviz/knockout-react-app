export interface RouterSnapshot {
  navigate: (path: string, options?: { replace?: boolean | undefined }) => void;
  params: Record<string, string>;
  location: {
    pathname: string; // example: '/users'
    search: string; // example: '?id=1'
  };
  setSearchParams: (params: Record<string, string>) => void;
}
