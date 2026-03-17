import { ko } from '@/shared/lib/ko';
import { localStorageSync } from './local-storage.extender';
import { storeSync } from './zustand.extender';

const extenders = {
  localStorageSync,
  storeSync,
};

export function setupExtenders() {
  Object.entries(extenders).forEach(([name, extender]) => {
    ko.extenders[name] = extender;
  });
}
