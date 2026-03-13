import { DatepickerViewModel } from '../models/datepicker';
import { datepickerTemplate } from '../templates/datepicker';

export const datepickerComponent: KnockoutComponentTypes.Config<
  typeof DatepickerViewModel
> = {
  viewModel: DatepickerViewModel,
  template: datepickerTemplate,
};
