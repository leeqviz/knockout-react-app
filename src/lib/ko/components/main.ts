import { MainViewModel } from '../models/main';
import { mainTemplate } from '../templates/main';

export const mainComponent: KnockoutComponentTypes.Config<
  typeof MainViewModel
> = {
  viewModel: MainViewModel,
  template: mainTemplate,
};
