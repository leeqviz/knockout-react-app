import type { RouterData } from '@/types/router';
import { createContext } from 'react';

export const RouterContext = createContext<RouterData | null>(null);
