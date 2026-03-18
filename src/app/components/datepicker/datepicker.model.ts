import type { ReactBindingOptions } from '@/app/bindings';
import {
  ReactComponentWithRouterViewModel,
  type ReactComponentWithRouterViewModelParams,
} from '@/app/models';
import {
  DatepickerEntryPointLazy,
  type DatepickerEntryPointProps,
} from '@/modules/datepicker';

export class DatepickerViewModel extends ReactComponentWithRouterViewModel {
  public binding: ReactBindingOptions<DatepickerEntryPointProps>;

  public constructor(params: ReactComponentWithRouterViewModelParams) {
    super(params);
    this.binding = {
      component: DatepickerEntryPointLazy,
      props: this.computedProps(),
    };
  }
}
