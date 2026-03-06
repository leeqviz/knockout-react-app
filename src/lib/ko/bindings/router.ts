export const routerBindingHandler: KnockoutBindingHandler = {
  init: function (
    element: HTMLElement,
    _valueAccessor,
    _allBindings,
    _viewModel,
    bindingContext,
  ) {
    element.addEventListener('click', (e: MouseEvent) => {
      // 1. Отменяем стандартный переход браузера!
      e.preventDefault();

      // 2. Берем адрес из атрибута href
      const path = element.getAttribute('href');

      if (path) {
        // 3. Вызываем метод navigate из нашей корневой модели
        // $root всегда ссылается на AppRootViewModel
        bindingContext.$root.navigate(path);
      }
    });
  },
};
