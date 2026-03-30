import {
  datepickerComponentMeta,
  datepickerLazyComponentMeta,
  mainComponentMeta,
  mainLazyComponentMeta,
  notFoundComponentMeta,
  notFoundLazyComponentMeta,
} from '@/app/components';
import { ko } from '@/shared/lib/ko';
import {
  headerComponentMeta,
  headerLazyComponentMeta,
} from '../components/header';

const components = [
  mainComponentMeta,
  mainLazyComponentMeta,
  datepickerComponentMeta,
  datepickerLazyComponentMeta,
  notFoundComponentMeta,
  notFoundLazyComponentMeta,
  headerComponentMeta,
  headerLazyComponentMeta,
];

export function setupComponents() {
  components.forEach((component) => {
    if (ko.components.isRegistered(component.name)) {
      console.warn(
        `Component "${component.name}" is already registered. Unregistering...`,
      );
      ko.components.unregister(component.name);
    }
    ko.components.register(
      component.name,
      component.lazy ? { lazy: component.lazy } : { ...component.component },
    );
  });
}
