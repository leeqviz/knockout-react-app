import { HeaderViewModel } from './header.model';
import headerTemplate from './header.template.html?raw';

export const headerComponent: KnockoutComponentTypes.Config<
  typeof HeaderViewModel
> = {
  viewModel: HeaderViewModel,
  template: headerTemplate,
};
