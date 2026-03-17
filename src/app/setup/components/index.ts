import { registerComponent } from '@/shared/utils/ko';
import {
  datepickerComponentMeta,
  datepickerLazyComponentMeta,
} from './datepicker';
import { mainComponentMeta, mainLazyComponentMeta } from './main';
import { notFoundComponentMeta, notFoundLazyComponentMeta } from './not-found';

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
      : registerComponent(component.name, { ...component.component }),
  );
}
