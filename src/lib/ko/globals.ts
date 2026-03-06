import type { StoreApi } from 'zustand';

export interface StoreSyncConfig<TState, TSlice> {
  store: StoreApi<TState>;
  selector: (state: TState) => TSlice;
  setter?: (newValue: TSlice) => Partial<TState> | void;
}

export interface StoreSyncArrayConfig<TState, TSlice> {
  store: StoreApi<TState>;
  selector: (state: TState) => TSlice[];
  setter?: (newValue: TSlice[]) => Partial<TState> | void;
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
}
