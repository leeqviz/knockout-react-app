import {
  appEventBus,
  type ApplicationEventName,
  type ApplicationEventPayloadMap,
} from '@/lib/ko/event-bus/app';
import { useEffect } from 'react';

export function useAppEventBus<T extends ApplicationEventName>(
  event: T,
  callback: (payload: ApplicationEventPayloadMap[T]) => void,
) {
  useEffect(() => {
    const subscription = appEventBus.subscribe(event, callback);

    return () => {
      subscription.dispose();
    };
  }, [event, callback]);
}
