import { MainViewModel } from '@/lib/models/main';

export const mainComponent = {
  viewModel: MainViewModel,
  template: /*html*/ `
    <div
        data-bind="reactMain: { 
            component, 
            props
        }"
      ></div>
    `,
};
