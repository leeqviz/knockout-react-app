import { useAppStore } from '@/hooks/state-management';

export function UsersList() {
  const users = useAppStore((state) => state.users);
  const addUser = useAppStore((state) => state.addUser);

  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>{u.name}</div>
      ))}
      <button
        className="border border-blue-500"
        onClick={() => addUser('New User')}
      >
        Add user
      </button>
    </div>
  );
}
