import { ko } from '../globals';

export class EventBus<TEventPayloadMap extends Record<string, unknown>> {
  protected dispatcher: KnockoutSubscribable<unknown>;

  public constructor() {
    this.dispatcher = new ko.subscribable<unknown>();

    this.publish = this.publish.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  public publish<TEvent extends keyof TEventPayloadMap & string>(
    event: TEvent,
    payload: TEventPayloadMap[TEvent],
  ): void {
    this.dispatcher.notifySubscribers(payload, event);
  }

  public subscribe<TEvent extends keyof TEventPayloadMap & string>(
    event: TEvent,
    callback: (payload: TEventPayloadMap[TEvent]) => void,
    target?: unknown,
  ): KnockoutSubscription {
    return this.dispatcher.subscribe(callback, target, event);
  }
}
