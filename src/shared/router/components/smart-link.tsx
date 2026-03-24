import { useNavigation } from '../hooks';
import { Link } from './link';

export function SmartLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const navigation = useNavigation();
  const isPending =
    navigation.state === 'loading' && navigation.location?.pathname === to;

  return (
    <Link
      to={to}
      className={({ isActive }) =>
        [isActive && 'active', isPending && 'pending'].filter(Boolean).join(' ')
      }
    >
      {children}
    </Link>
  );
}
