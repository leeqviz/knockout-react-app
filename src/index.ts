import ko from 'knockout';
import './index.css';
import { reactBindingHandler } from './lib/bindings/react';
import { AppViewModel } from './lib/models/app';

ko.bindingHandlers['reactMain'] = reactBindingHandler;
ko.bindingHandlers['reactDatepicker'] = reactBindingHandler;

// Запускаем Knockout
ko.applyBindings(new AppViewModel());
