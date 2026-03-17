import { BaseRouter } from './base-router';
import { requireAuth } from './middlewares';
import type { RouterOptions } from './types';

export class AppRouter extends BaseRouter {
  private static instance: AppRouter | null = null;

  private constructor(options: RouterOptions) {
    super(options);
  }

  public static getInstance(options: RouterOptions): AppRouter {
    if (!AppRouter.instance) {
      AppRouter.instance = new AppRouter(options);
    }

    return AppRouter.instance;
  }
}

export const appRouter = AppRouter.getInstance({
  notFoundComponent: 'not-found-component',
  routes: [
    { pattern: '/', component: 'main-component' },
    {
      pattern: '/test',
      component: 'datepicker-component',
      middlewares: [requireAuth],
    },
    { pattern: '/users/:id', component: 'user-component' },
    { pattern: '/docs/*', component: 'docs-catch-all' },
    { pattern: '/:lang?/about', component: 'about-component' },
    { pattern: '/files/:path*', component: 'file-viewer' },
  ],
});
