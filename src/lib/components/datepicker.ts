import { DatepickerViewModel } from '@/lib/models/datepicker';

export const datepickerComponent = {
  viewModel: DatepickerViewModel,
  template: /*html*/ `
    <div
        data-bind="reactDatepicker: { 
            component, 
            props
        }"
      ></div>
    `,
};
