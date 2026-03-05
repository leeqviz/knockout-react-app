import ko from 'knockout';
import './index.css';
import { reactBindingHandler } from './lib/bindings/react';
import { datepickerComponent } from './lib/components/datepicker';
import { mainComponent } from './lib/components/main';

import { AppViewModel } from './lib/models/app';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

// apply knockout components
ko.components.register('main-component', mainComponent);
ko.components.register('datepicker-component', datepickerComponent);

// apply knockout bindings
ko.bindingHandlers['reactMain'] = reactBindingHandler;
ko.bindingHandlers['reactDatepicker'] = reactBindingHandler;

// apply knockout async rendering
ko.options.deferUpdates = true;

// apply bindings for app viewModel
ko.applyBindings(new AppViewModel(), rootElement);
// we can also add more view models to other elements by id, but this elements should not be nested
