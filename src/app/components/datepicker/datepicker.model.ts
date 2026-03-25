import type { ReactBindingOptions } from '@/app/bindings';
import {
  ReactComponentWithRouterViewModel,
  type ReactComponentWithRouterViewModelParams,
} from '@/app/models';
import {
  DatepickerEntryPointLazy,
  type DatepickerEntryPointProps,
} from '@/modules/datepicker';
import { ko } from '@/shared/lib/ko';

export class DatepickerViewModel extends ReactComponentWithRouterViewModel<DatepickerEntryPointProps> {
  public bindingOptions: KnockoutComputed<
    ReactBindingOptions<DatepickerEntryPointProps>
  >;

  public constructor(params: ReactComponentWithRouterViewModelParams) {
    super(params);
    this.bindingOptions = ko.pureComputed(
      (): ReactBindingOptions<DatepickerEntryPointProps> => ({
        component: DatepickerEntryPointLazy,
        props: this.props,
      }),
    );
  }
}
