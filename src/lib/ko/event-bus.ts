import ko from 'knockout';

// singleton of knockout event bus to subscribe to events (for example from react) and notify listeners (for example from knockout)
export const appEventBus = new ko.subscribable();
