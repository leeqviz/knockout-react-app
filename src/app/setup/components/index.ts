import {
  notFoundComponentMeta,
  notFoundLazyComponentMeta,
} from '@/shared/router';
import { registerComponent } from '@/shared/utils/ko';
import {
  datepickerComponentMeta,
  datepickerLazyComponentMeta,
} from './datepicker';
import { mainComponentMeta, mainLazyComponentMeta } from './main';

const components = [
  mainComponentMeta,
  mainLazyComponentMeta,
  datepickerComponentMeta,
  datepickerLazyComponentMeta,
  notFoundComponentMeta,
  notFoundLazyComponentMeta,
];

export function setupComponents() {
  components.forEach((component) =>
    component.lazy
      ? registerComponent(component.name, { lazy: component.lazy })
      : registerComponent(component.name, component.component),
  );
}
