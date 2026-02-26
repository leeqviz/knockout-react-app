import { TestInput } from "./components/test-input";
import UsersList from "./components/users-list";

interface MainRootProps {
  count: number;
  setCount: (value: number) => void;
}

export function MainRoot({ count, setCount }: MainRootProps) {
  return (
    <>
      <TestInput count={count} setCount={setCount} />
      <UsersList />
    </>
  );
}
