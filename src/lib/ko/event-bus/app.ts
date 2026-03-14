import { EventBus } from '.';

export const ApplicationEvent = {
  REACT_COMPONENT_RENDER: 'react/component-render',
  TEST: 'test',
} as const;

export type ApplicationEventPayloadMap = {
  [ApplicationEvent.REACT_COMPONENT_RENDER]: { name: string };
  [ApplicationEvent.TEST]: string;
};

// get ApplicationEvent values as type union because ApplicationEvent has not only one key
export type ApplicationEventName =
  (typeof ApplicationEvent)[keyof typeof ApplicationEvent];

// additional helper for type-safety
// example: ApplicationEventPayloadOf<typeof ApplicationEvent.REACT_COMPONENT_RENDER>
export type ApplicationEventPayloadOf<T extends ApplicationEventName> =
  ApplicationEventPayloadMap[T];

export class ApplicationEventBus extends EventBus<ApplicationEventPayloadMap> {
  private static instance: ApplicationEventBus | null = null;

  private constructor() {
    super();
  }

  public static getInstance(): ApplicationEventBus {
    if (!ApplicationEventBus.instance) {
      ApplicationEventBus.instance = new ApplicationEventBus();
    }

    return ApplicationEventBus.instance;
  }
}

export const appEventBus = ApplicationEventBus.getInstance();
