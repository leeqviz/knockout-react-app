import {
  DatepickerEntryPointLazy,
  type DatepickerEntryPointProps,
} from '@/modules/datepicker';
import type { ComponentType } from 'react';
import type { AppViewModel } from './app';

export class DatepickerViewModel {
  public props: unknown;
  public component: ComponentType<DatepickerEntryPointProps>;

  constructor(params: { globals: AppViewModel; route: unknown }) {
    this.props = {
      date: params.globals.globalDate,
      setDate: params.globals.setGlobalDate,
      route: params.route,
    };
    this.component = DatepickerEntryPointLazy;
  }

  public dispose() {}
}
