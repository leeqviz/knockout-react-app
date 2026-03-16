import { AppViewModel } from '@/app/setup/models';
import { ko } from '@/shared/lib/ko';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

import './setup/bindings'; // apply custom knockout bindings
import './setup/components'; // apply custom knockout components
import './setup/extenders'; // apply custom extenders
import './setup/loaders'; // apply custom loaders
import './setup/options'; // apply custom knockout options

// apply all bindings for app view model
ko.applyBindings(new AppViewModel(), rootElement);
