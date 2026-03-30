import type { ReactNode } from 'react';

export interface NavItem {
  to: string;
  label: string;
  exact?: boolean;
  icon?: ReactNode;
  children?: NavItem[];
}
