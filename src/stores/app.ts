import type { User } from "@/types/user";
import { useStore } from "zustand";
import { createStore } from "zustand/vanilla";

// Описываем состояние
interface AppState {
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
export const useAppStore = (selector: (state: AppState) => any) =>
  useStore(appStore, selector);
