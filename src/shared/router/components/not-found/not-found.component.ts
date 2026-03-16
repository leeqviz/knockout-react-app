import { NotFoundViewModel } from './not-found.model';
import { notFoundTemplate } from './not-found.template';

export const notFoundComponent: KnockoutComponentTypes.Config<
  typeof NotFoundViewModel
> = {
  viewModel: NotFoundViewModel,
  template: notFoundTemplate,
};
