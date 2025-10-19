import {Navigate} from "react-router";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { authState, user } = useAuth();

  console.debug("ProtectedRoute Auth State:", authState);
  console.debug("ProtectedRoute User:", user);

  if (authState === "loading") {
    return <div className="text-center mt-10">Verificando sesión...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
