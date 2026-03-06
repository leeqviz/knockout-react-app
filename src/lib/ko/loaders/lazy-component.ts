import ko from 'knockout';

export const lazyComponentLoader: KnockoutComponentTypes.Loader = {
  loadComponent: function (name, componentConfig, callback) {
    if (!componentConfig.lazy) {
      // It is not a lazy component
      callback(null);
      return;
    }

    // Resolve lazy component
    componentConfig
      .lazy()
      .then((module) => {
        if (!module.default) {
          console.error(`Module ${name} has no default export`);
          callback(null);
          return;
        }
        // Отдаем стандартному загрузчику Knockout для финальной сборки
        ko.components.defaultLoader.loadComponent?.(
          name,
          module.default,
          callback,
        );
      })
      .catch((err: unknown) => {
        console.error(`Ошибка загрузки компонента ${name}:`, err);
        callback(null);
      });
  },
};
