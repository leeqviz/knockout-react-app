import { MainViewModel } from './main.model';
import { mainTemplate } from './main.template';

export const mainComponent: KnockoutComponentTypes.Config<
  typeof MainViewModel
> = {
  viewModel: MainViewModel,
  template: mainTemplate,
};
