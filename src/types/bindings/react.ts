import type { ElementType } from "react";
import type { Root } from "react-dom/client";

// 1. Расширяем стандартный HTMLElement, добавляя наш корень React
export interface HTMLElementWithReact extends HTMLElement {
  _reactRoot?: Root;
}

// 2. Описываем, что мы ждем в конфигурации биндинга
export interface ReactBindingOptions {
  component?: ElementType;
  props?: Record<string, unknown>;
  deepUnwrap?: boolean; // если true, будет выполнен глубокий unwrap для всех пропсов, что полезно для сложных объектов и массивов, чтобы React получал чистые данные без реактивных оберток Knockout
}
