import {Navigate} from "react-router";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export default function ProtectedRoute({children}: ProtectedRouteProps) {

    //mock authentication check
    const {user} = {user: {name: "John Doe", role: "seller"}};  
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
}