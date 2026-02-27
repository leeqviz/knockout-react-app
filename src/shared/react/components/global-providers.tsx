import type { ReactNode } from "react";

// TODO add theme provider

export const GlobalProviders: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};
