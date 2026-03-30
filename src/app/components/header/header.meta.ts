import type { KnockoutComponentMeta } from '@/shared/lib/ko';
import { headerComponent } from './header.component';

export const headerComponentMeta: KnockoutComponentMeta = {
  name: 'header-component',
  component: headerComponent,
};

export const headerLazyComponentMeta: KnockoutComponentMeta = {
  name: 'header-lazy-component',
  lazy: () =>
    import('./header.component').then((res) => ({
      default: res.headerComponent,
    })),
};
