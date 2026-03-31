import { NavLink, useRouter } from '@/shared/router';
import { useCallback, useState } from 'react';
import type { NavItem } from '../types/nav';
import { DropdownMenu } from './dropdown-menu';

export function NavBarItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate?: () => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { routeAPI } = useRouter();

  const hasChildren = !!item.children?.length;
  const isParentActive =
    hasChildren && item.children!.some((c) => routeAPI.isActive(c.to));

  const closeDropdown = useCallback(() => setDropdownOpen(false), []);

  if (hasChildren) {
    return (
      <div className="header-nav__item header-nav__item--parent">
        <button
          className={[
            'header-nav__link',
            'header-nav__link--parent',
            isParentActive && 'header-nav__link--active',
            dropdownOpen && 'header-nav__link--open',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-expanded={dropdownOpen}
          aria-haspopup="menu"
          onClick={() => setDropdownOpen((o) => !o)}
        >
          {item.icon && (
            <span className="header-nav__icon" aria-hidden>
              {item.icon}
            </span>
          )}
          {item.label}
          <svg
            className="header-nav__chevron"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
            style={{
              transform: dropdownOpen ? 'rotate(180deg)' : 'none',
              transition: 'transform 180ms ease',
            }}
          >
            <path
              d="M2 4l4 4 4-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <DropdownMenu items={item.children!} onClose={closeDropdown} />
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={item.to}
      className={({ isActive, isExact }) =>
        [
          'header-nav__link',
          isActive && 'header-nav__link--active',
          isExact && 'header-nav__link--exact',
        ]
          .filter(Boolean)
          .join(' ')
      }
      onClick={onNavigate}
    >
      {item.icon && (
        <span className="header-nav__icon" aria-hidden>
          {item.icon}
        </span>
      )}
      {item.label}
    </NavLink>
  );
}
