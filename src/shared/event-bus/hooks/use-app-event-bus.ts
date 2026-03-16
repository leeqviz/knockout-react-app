import { useEffect } from 'react';
import { appEventBus } from '..';
import type {
  ApplicationEventName,
  ApplicationEventPayloadMap,
} from '../types';

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
