export const routerBindingHandler: KnockoutBindingHandler = {
  init: function (
    element: HTMLElement,
    _valueAccessor,
    _allBindings,
    _viewModel,
    bindingContext,
  ) {
    element.addEventListener('click', (e: MouseEvent) => {
      // cancel default behavior
      e.preventDefault();

      const path = element.getAttribute('href');

      if (path) {
        // $root always related to the root view model
        bindingContext.$root.navigate(path);
      }
    });
  },
};
