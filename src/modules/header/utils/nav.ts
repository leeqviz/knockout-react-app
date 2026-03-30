import type { NavItem } from '../types/nav';

export const navItems: NavItem[] = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/users', label: 'Users' },
  {
    to: '/settings',
    label: 'Settings',
    children: [
      { to: '/settings/profile', label: 'Profile' },
      { to: '/settings/security', label: 'Security' },
      { to: '/settings/billing', label: 'Billing' },
    ],
  },
];
