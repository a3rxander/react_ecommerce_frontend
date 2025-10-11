import { Navigate, useLocation } from "react-router";

import useAuth from "@/app/hooks/useAuth";

interface RoleBasedRouteProps {
  children: React.ReactNode;
  role: "admin" | "seller" | "customer";
}

export default function RoleBasedRoute({ children, role }: RoleBasedRouteProps) {
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

  if (user.role !== role) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: "/" }}
      />
    );
  }

  return <>{children}</>;
}
