import type {
  HTMLElementWithReact,
  ReactBindingOptions,
} from "@/types/bindings/react";
import ko from "knockout";
import { createElement } from "react";
import { createRoot } from "react-dom/client";

export const reactBindingHandler: KnockoutBindingHandler = {
  // 3. Инициализация биндинга: создаем корневой элемент React и обеспечиваем его очистку при удалении узла
  // controlsDescendantBindings: true говорит Knockout, что внутри этого элемента мы будем управлять всем рендерингом, и он не должен пытаться обрабатывать дочерние элементы
  // Данный метод вызывается один раз при связывании элемента с данным биндингом и позволяет нам подготовить элемент для рендеринга React-компонента
  init: function (element: HTMLElementWithReact) {
    // 1. Создаем корень React на данном элементе и сохраняем его в специальном свойстве, чтобы потом иметь к нему доступ для рендеринга и очистки
    element._reactRoot = createRoot(element);

    // 2. Уборка мусора (Предотвращение утечек памяти)
    // Может быть удобно в случае, если нужно условно рендерить разные React компоненты в зависимости от состояния Knockout, но при этом гарантировать, что старые компоненты будут корректно удалены и не будут занимать память
    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
      if (element._reactRoot) element._reactRoot.unmount();
    });

    return { controlsDescendantBindings: true };
  },

  // 4. Обновление биндинга: рендерим React-компонент с новыми пропсами при каждом изменении наблюдаемых переменных. Функция valueAccessor возвращает то, что написано в HTML (наш объект с component и props). Мы пропускаем его через ko.unwrap(), на случай если сам конфигурационный объект тоже оказался реактивным.
  update: function (
    element: HTMLElementWithReact,
    valueAccessor: () => ReactBindingOptions, // possibly any value
  ) {
    // 1. Получаем конфигурацию биндинга, которая включает в себя React-компонент и его пропсы. Мы используем ko.unwrap, чтобы получить чистые значения, даже если они были определены как наблюдаемые переменные в Knockout
    const options = ko.unwrap(valueAccessor());
    const Component = options.component;
    const deepUnwrap = options.deepUnwrap || false;

    // 2. Распаковываем пропсы, чтобы получить чистые данные без реактивных оберток Knockout. Это позволяет нам передавать в React-компонент обычные значения, даже если они были определены как наблюдаемые переменные в Knockout
    const reactProps: Record<string, any> = {};
    if (options.props) {
      for (const key in options.props) {
        // глубокий unwrap для вложенных объектов, чтобы React получал чистые данные без реактивных оберток Knockout
        reactProps[key] = deepUnwrap
          ? ko.toJS(options.props[key])
          : ko.unwrap(options.props[key]);
      }
    }

    // 3. Рендерим компонент React внутри нашего элемента, используя ранее созданный корневой элемент. Мы передаем в компонент все распакованные пропсы, что позволяет ему корректно реагировать на изменения данных из Knockout. Здесь нельзя использовать JSX, поэтому мы используем createElement для создания элемента React и передаем ему все необходимые пропсы
    if (element._reactRoot && Component) {
      element._reactRoot.render(createElement(Component, reactProps));
    }
  },
};
