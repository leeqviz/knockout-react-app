import ko from 'knockout';

export interface ApplicationEventMap {
  REACT_COMPONENT_READY: { componentId: string };
}

export type ApplicationEventName = keyof ApplicationEventMap;

class ApplicationEventBus {
  private dispatcher: KnockoutSubscribable<unknown>;

  constructor() {
    this.dispatcher = new ko.subscribable<unknown>();
  }

  public publish<T extends ApplicationEventName>(
    event: T,
    payload: ApplicationEventMap[T],
  ): void {
    this.dispatcher.notifySubscribers(payload, event);
  }

  public subscribe<T extends ApplicationEventName>(
    event: T,
    callback: (payload: ApplicationEventMap[T]) => void,
    target?: unknown,
  ): KnockoutSubscription {
    return this.dispatcher.subscribe(callback, target, event);
  }
}

export const appEventBus = new ApplicationEventBus();
