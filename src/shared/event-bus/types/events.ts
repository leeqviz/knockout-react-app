import type { ApplicationEvent } from '../constants';

// get ApplicationEvent values as type union because ApplicationEvent has not only one key
export type ApplicationEventName =
  (typeof ApplicationEvent)[keyof typeof ApplicationEvent];

export type ApplicationEventPayloadMap = {
  [ApplicationEvent.REACT_COMPONENT_RENDER]: { name: string };
  [ApplicationEvent.TEST]: string;
};

// additional helper for type-safety
// example: ApplicationEventPayloadOf<typeof ApplicationEvent.REACT_COMPONENT_RENDER>
export type ApplicationEventPayloadOf<T extends ApplicationEventName> =
  ApplicationEventPayloadMap[T];
