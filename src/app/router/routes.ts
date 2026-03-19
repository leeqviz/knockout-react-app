import {
  datepickerComponentMeta,
  mainComponentMeta,
  notFoundComponentMeta,
} from '@/app/components';
import type { RouteConfig } from '@/shared/router';
import { requireAuth } from './middlewares';

export const appRoutes: RouteConfig[] = [
  { pattern: '/', component: mainComponentMeta.name },
  {
    pattern: '/test',
    component: datepickerComponentMeta.name,
    middlewares: [requireAuth],
  },
  { pattern: '/users/:id', component: 'user-component' },
  { pattern: '/docs/*', component: 'docs-catch-all' },
  { pattern: '/:lang?/about', component: 'about-component' },
  { pattern: '/files/:path*', component: 'file-viewer' },
  { pattern: '/*', component: notFoundComponentMeta.name },
];
