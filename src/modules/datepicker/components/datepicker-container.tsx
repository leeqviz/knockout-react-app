import {
  appEventBus,
  ApplicationEvent,
  type ApplicationEventPayloadMap,
} from '@/shared/event-bus/app';
import { DefaultContainer } from '@/shared/ui/container';
import { useEffect } from 'react';
import { JqueryDatepicker } from './jquery-datepicker';

export function DatepickerContainer() {
  useEffect(() => {
    const payload: ApplicationEventPayloadMap['react/component-render'] = {
      name: 'datepicker',
    };
    appEventBus.publish(ApplicationEvent.REACT_COMPONENT_RENDER, payload);
  }, []);

  return (
    <DefaultContainer moduleName="Datepicker module">
      <JqueryDatepicker />
    </DefaultContainer>
  );
}
