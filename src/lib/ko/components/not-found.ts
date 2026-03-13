import { NotFoundViewModel } from '../models/not-found';
import { notFoundTemplate } from '../templates/not-found';

export const notFoundComponent: KnockoutComponentTypes.Config<
  typeof NotFoundViewModel
> = {
  viewModel: NotFoundViewModel,
  template: notFoundTemplate,
};
