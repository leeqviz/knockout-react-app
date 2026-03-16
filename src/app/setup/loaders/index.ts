import { ko } from '@/shared/lib/ko';
import { lazyComponentLoader } from './lazy-component.loader';

ko.components.loaders.unshift(lazyComponentLoader);
