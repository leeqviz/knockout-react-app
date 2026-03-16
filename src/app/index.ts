import {
  linkBindingHandler,
  navigateBindingHandler,
  reactBindingHandler,
} from '@/app/bootstrap/bindings';
import { datepickerComponent } from '@/app/bootstrap/components/datepicker';
import { mainComponent } from '@/app/bootstrap/components/main';
import { localStorageSync, storeSync } from '@/app/bootstrap/extenders';
import { lazyComponentLoader } from '@/app/bootstrap/loaders';
import { AppViewModel } from '@/app/bootstrap/models';
import { ko } from '@/shared/lib/ko';
import { notFoundComponent } from '@/shared/router';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// apply custom extenders
ko.extenders.storeSync = storeSync;
ko.extenders.localStorageSync = localStorageSync;

// apply custom loaders
ko.components.loaders.unshift(lazyComponentLoader);

// apply custom knockout components
ko.components.register('not-found-component', notFoundComponent);
ko.components.register('main-component', mainComponent);
ko.components.register('datepicker-component', datepickerComponent);
ko.components.register('main-lazy-component', {
  lazy: () =>
    import('@/app/bootstrap/components/main').then((res) => ({
      default: res.mainComponent,
    })),
});
ko.components.register('datepicker-lazy-component', {
  lazy: () =>
    import('@/app/bootstrap/components/datepicker').then((res) => ({
      default: res.datepickerComponent,
    })),
});

// apply custom knockout bindings
ko.bindingHandlers['link'] = linkBindingHandler;
ko.bindingHandlers['navigate'] = navigateBindingHandler;
ko.bindingHandlers['reactMain'] = reactBindingHandler;
ko.bindingHandlers['reactDatepicker'] = reactBindingHandler;

// apply knockout async rendering
ko.options.deferUpdates = true;

// apply all bindings for app view model
ko.applyBindings(new AppViewModel(), rootElement);
