import {Navigate} from "react-router";

interface ProtectedRouteProps {
    children: React.ReactNode;
    role: "admin" | "seller" | "customer";
}

export default function RoleBasedRoute({children, role}: ProtectedRouteProps) {
    //mock role check
    const {user} = {user: {name: "John Doe", role: "seller"}};  

    if(!user)
    {
        return <Navigate to="/login" replace />;
    }
    if (user.role !== role) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}