import type { StoreApi } from 'zustand';

declare global {
  interface KnockoutExtenders {
    localStorage(
      target: KnockoutObservable<unknown>,
      key: string,
    ): KnockoutObservable<unknown>;
    globalStore(
      target: KnockoutObservable<unknown>,
      options: {
        store: StoreApi<unknown>;
        selector: (state: unknown) => unknown;
        updater: (newValue: unknown) => void;
      },
    ): KnockoutObservable<unknown>;
  }
}
