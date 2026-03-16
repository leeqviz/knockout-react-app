import { BaseEventBus } from './lib';
import type { ApplicationEventPayloadMap } from './types';

export class ApplicationEventBus extends BaseEventBus<ApplicationEventPayloadMap> {
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
