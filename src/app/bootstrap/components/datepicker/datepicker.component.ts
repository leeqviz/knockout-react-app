import { DatepickerViewModel } from './datepicker.model';
import { datepickerTemplate } from './datepicker.template';

export const datepickerComponent: KnockoutComponentTypes.Config<
  typeof DatepickerViewModel
> = {
  viewModel: DatepickerViewModel,
  template: datepickerTemplate,
};
