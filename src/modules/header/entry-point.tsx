import { RouterProvider, type RouterSnapshot } from '@/shared/router';
import { ErrorBoundary } from '@/shared/ui/error-boundary';
import { Header } from './components/header';
import './styles.css';
import { navItems } from './utils/nav';

export interface HeaderEntryPointProps {
  router: RouterSnapshot | null;
}

export function HeaderEntryPoint({ router }: HeaderEntryPointProps) {
  return (
    <ErrorBoundary name="Header Module">
      <RouterProvider value={router}>
        <Header items={navItems} sticky={true} />
      </RouterProvider>
    </ErrorBoundary>
  );
}
