import { ko } from '@/shared/lib/ko';
import { lazyComponentLoader } from './lazy-component.loader';

const loaders = [lazyComponentLoader]; // order is important

export function setupLoaders() {
  ko.components.loaders.unshift(...loaders);
}
