import type { User } from './user';

export interface AppStateData {
  isAuth: boolean;
  user: User | null;
  count: number;
  date: string;
  users: User[];
  theme: 'light' | 'dark';
}

export interface AppStateActions {
  reset: () => void;

  setCount: (value: number) => void;
  setDate: (value: string) => void;
  addUser: (name: string) => void;
  setTheme: (value: 'light' | 'dark') => void;
}

export type AppState = AppStateData & AppStateActions;
