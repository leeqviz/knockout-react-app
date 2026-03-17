import { ko } from '@/shared/lib/ko';
import { linkBindingHandler } from './link.binding';
import { navigateBindingHandler } from './navigate.binding';
import { reactBindingHandler } from './react.binding';

const bindingHandlers: Record<string, KnockoutBindingHandler> = {
  link: linkBindingHandler,
  navigate: navigateBindingHandler,
  reactMain: reactBindingHandler,
  reactDatepicker: reactBindingHandler,
};

export function setupBindings() {
  Object.entries(bindingHandlers).forEach(([name, handler]) => {
    ko.bindingHandlers[name] = handler;
  });
}
