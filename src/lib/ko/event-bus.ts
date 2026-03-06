import ko from 'knockout';

export interface ApplicationEventMap {
  NAVIGATION_REQUESTED: { path: string; params?: Record<string, unknown> };
  MODAL_OPEN: { componentName: string; props: unknown };
  MODAL_CLOSE: void;
  DATA_SYNC_ERROR: { endpoint: string; message: string; code: number };
  REACT_COMPONENT_READY: { componentId: string };
}

export type ApplicationEventName = keyof ApplicationEventMap;

class ApplicationEventBus {
  private dispatcher: KnockoutSubscribable<unknown>;

  constructor() {
    this.dispatcher = new ko.subscribable<unknown>();
  }

  /**
   * Публикация события в систему.
   * @param event Имя события из строго типизированной карты.
   * @param payload Данные события. Тип выводится автоматически на основе event.
   */
  public publish<T extends ApplicationEventName>(
    event: T,
    payload: ApplicationEventMap[T],
  ): void {
    this.dispatcher.notifySubscribers(payload, event);
  }

  /**
   * Подписка на событие.
   * @param event Имя события для прослушивания.
   * @param callback Функция обратного вызова, принимающая типизированный payload.
   * @returns Объект ko.Subscription, требующий вызова.dispose() при очистке.
   */
  public subscribe<T extends ApplicationEventName>(
    event: T,
    callback: (payload: ApplicationEventMap[T]) => void,
    target?: unknown,
  ): KnockoutSubscription {
    return this.dispatcher.subscribe(callback, target, event);
  }
}

// Экспорт синглтона для доступа из любой точки гибридного приложения
export const appEventBus = new ApplicationEventBus();
