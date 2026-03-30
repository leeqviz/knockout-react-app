import { NavLink } from '@/shared/router';
import { useEffect, useRef } from 'react';
import type { NavItem } from '../types/nav';

export function DropdownMenu({
  items,
  onClose,
}: {
  items: NavItem[];
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  return (
    <div ref={ref} className="header-dropdown" role="menu">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              'header-dropdown__item',
              isActive && 'header-dropdown__item--active',
            ]
              .filter(Boolean)
              .join(' ')
          }
          role="menuitem"
          onClick={onClose}
        >
          {item.icon && (
            <span className="header-dropdown__icon" aria-hidden>
              {item.icon}
            </span>
          )}
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
