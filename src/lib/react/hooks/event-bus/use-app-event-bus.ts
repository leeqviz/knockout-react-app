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
    // Подписка на шину событий Knockout при монтировании React-компонента
    const subscription = appEventBus.subscribe(event, callback);

    // Функция очистки (cleanup function) вызывается React при размонтировании
    return () => {
      subscription.dispose();
    };
  }, [event, callback]);
}
