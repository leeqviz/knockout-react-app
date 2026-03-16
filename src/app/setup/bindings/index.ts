import { ko } from '@/shared/lib/ko';
import { linkBindingHandler } from './link.binding';
import { navigateBindingHandler } from './navigate.binding';
import { reactBindingHandler } from './react.binding';

ko.bindingHandlers['link'] = linkBindingHandler;
ko.bindingHandlers['navigate'] = navigateBindingHandler;
ko.bindingHandlers['reactMain'] = reactBindingHandler;
ko.bindingHandlers['reactDatepicker'] = reactBindingHandler;
