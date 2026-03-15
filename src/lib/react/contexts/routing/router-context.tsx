import type { RouterSnapshot } from '@/types/router';
import { createContext } from 'react';

export const RouterContext = createContext<RouterSnapshot | null>(null);
