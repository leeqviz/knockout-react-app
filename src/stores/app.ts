import type { User } from '@/types/user';
import { createStore } from 'zustand/vanilla';

export interface AppState {
  users: User[];
  addUser: (name: string) => void;
}

// Vanilla JS Zustand store
export const appStore = createStore<AppState>((set) => ({
  users: [{ id: 1, name: 'Test' }],
  addUser: (name) =>
    set((state) => ({
      users: [...state.users, { id: Date.now(), name }],
    })),
}));
