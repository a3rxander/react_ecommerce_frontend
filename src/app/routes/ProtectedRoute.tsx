import { Navigate, useLocation } from "react-router";

import useAuth from "@/app/hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname, navigationOptions: { state: location.state } }}
      />
    );
  }

  return <>{children}</>;
}
