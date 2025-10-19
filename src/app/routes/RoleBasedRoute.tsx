import {Navigate} from "react-router";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
    children: React.ReactNode;
    role: "Admin" | "Seller" | "Customer";
}

export default function RoleBasedRoute({children, role}: ProtectedRouteProps) {
    const {user} = useAuth();

    
    console.debug("RoleBasedRoute User Role:", user);
    console.debug("RoleBasedRoute Required Role:", role);

    if(!user)
    {
        return <Navigate to="/login" replace />;
    } 
    if (user.role !== role) {
        return <Navigate to="/" replace />;
    }
    

    return <>{children}</>;
}