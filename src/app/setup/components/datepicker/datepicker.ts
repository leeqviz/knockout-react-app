import type { KnockoutComponentMeta } from '@/shared/lib/ko';
import { datepickerComponent } from './datepicker.component';

export const datepickerComponentMeta: KnockoutComponentMeta = {
  name: 'datepicker-component',
  component: datepickerComponent,
};

export const datepickerLazyComponentMeta: KnockoutComponentMeta = {
  name: 'datepicker-lazy-component',
  component: datepickerComponent,
  lazy: () =>
    import('./datepicker.component').then((res) => ({
      default: res.datepickerComponent,
    })),
};
