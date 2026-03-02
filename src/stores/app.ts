import type { User } from "@/types/user";
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

// Описываем состояние
export interface AppState {
  users: User[];
  addUser: (name: string) => void;
}

// Создаем "ванильный" стор (без привязки к React)
export const appStore = createStore<AppState>((set) => ({
  users: [{ id: 1, name: "Иван" }],
  addUser: (name) =>
    set((state) => ({
      users: [...state.users, { id: Date.now(), name }],
    })),
}));

// Создаем React-хук для этого стора
export function useAppStore<T>(selector: (state: AppState) => T): T {
  return useStore(appStore, selector);
}
