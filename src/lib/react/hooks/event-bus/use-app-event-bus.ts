import {
  appEventBus,
  type ApplicationEventMap,
  type ApplicationEventName,
} from '@/lib/ko/event-bus';
import { useEffect } from 'react';

export function useAppEventBus<T extends ApplicationEventName>(
  event: T,
  callback: (payload: ApplicationEventMap[T]) => void,
) {
  useEffect(() => {
    const subscription = appEventBus.subscribe(event, callback);

    return () => {
      subscription.dispose();
    };
  }, [event, callback]);
}
