import { appStore, type AppState } from '@/shared/store/app';
import { useStore } from 'zustand';

export function useAppStore<T>(selector: (state: AppState) => T): T {
  return useStore(appStore, selector);
}
