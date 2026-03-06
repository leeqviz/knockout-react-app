import ko from 'knockout';

export const lazyComponentLoader: KnockoutComponentTypes.Loader = {
  loadComponent: function (name, componentConfig, callback) {
    // Если в конфиге компонента есть функция 'lazy'
    if (
      'lazy' in componentConfig &&
      typeof componentConfig.lazy === 'function'
    ) {
      // Вызываем динамический импорт
      componentConfig
        .lazy()
        .then((module) => {
          // Отдаем стандартному загрузчику Knockout для финальной сборки
          ko.components.defaultLoader.loadComponent?.(
            name,
            module.default || module,
            callback,
          );
        })
        .catch((err: unknown) => {
          console.error(`Ошибка загрузки компонента ${name}:`, err);
          callback(null);
        });
    } else {
      // Если это обычный компонент (не ленивый), передаем эстафету дальше
      callback(null);
    }
  },
};
