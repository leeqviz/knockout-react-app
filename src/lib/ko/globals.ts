import type { StoreApi } from 'zustand';

export interface StoreSyncConfig<TState, TSlice> {
  store: StoreApi<TState>;
  selector: (state: TState) => TSlice;
  setter?: (newValue: TSlice) => Partial<TState> | void;
}

export interface StoreSyncArrayConfig<TState, TSlice> {
  store: StoreApi<TState>;
  selector: (state: TState) => TSlice[];
  setter?: ((newValue: TSlice[]) => Partial<TState> | void) | undefined;
}

declare global {
  interface KnockoutExtenders {
    localStorageSync<T>(
      target: KnockoutObservable<T>,
      key: string,
    ): KnockoutObservable<T>;
    storeSync<TState, TSlice>(
      target: KnockoutObservable<TSlice>,
      options: StoreSyncConfig<TState, TSlice>,
    ): KnockoutObservable<TSlice>;
    storeSyncArray<TState, TSlice>(
      target: KnockoutObservableArray<TSlice>,
      options: StoreSyncArrayConfig<TState, TSlice>,
    ): KnockoutObservableArray<TSlice>;
  }
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace KnockoutComponentTypes {
    interface Config<T> {
      viewModel?: T | undefined;
      lazy?:
        | (() => Promise<{
            default?: Config<T> | undefined;
          }>)
        | undefined;
    }
    interface ComponentConfig<T> {
      viewModel?: T | undefined;
      lazy?:
        | (() => Promise<{
            default?: ComponentConfig<T> | undefined;
          }>)
        | undefined;
    }
  }
}
