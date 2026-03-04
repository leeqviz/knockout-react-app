import ko from 'knockout';
import './index.css';
import { reactBindingHandler } from './lib/bindings/react';
import { AppViewModel } from './lib/models/app';

// apply react binding handlers to knockout
ko.bindingHandlers['reactMain'] = reactBindingHandler;
ko.bindingHandlers['reactDatepicker'] = reactBindingHandler;

// run knockout
ko.applyBindings(new AppViewModel());
