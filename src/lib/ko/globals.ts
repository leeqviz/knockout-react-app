import type { StoreApi } from 'zustand';

declare global {
  interface KnockoutExtenders {
    persist(
      target: KnockoutObservable<unknown>,
      key: string,
    ): KnockoutObservable<unknown>;
    zustandSync(
      target: KnockoutObservable<unknown>,
      options: {
        store: StoreApi<unknown>;
        selector: (state: unknown) => unknown;
        updater: (newValue: unknown) => void;
      },
    ): KnockoutObservable<unknown>;
  }
  interface KnockoutObservable<T> {
    disposeZustandSync?: () => void;
  }
  interface KnockoutComputed<T> {
    disposeZustandSync?: () => void;
  }
}
