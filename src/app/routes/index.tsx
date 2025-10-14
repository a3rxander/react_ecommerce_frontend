import { createBrowserRouter  } from "react-router";
import RootLayout from "@/app/layout/RootLayout";
import AdminLayout from "@/app/layout/AdminLayout";
import SellerLayout from "@/app/layout/SellerLayout";

import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

import LoginPage from "@/pages/shared/LoginPage";
import SignupPage from "@/pages/shared/SignupPage";

//Admin Pages
import UsersPage from "@/pages/admin/UsersPage";

//Seller Pages
import SellerProductsPage from "@/pages/seller/SellerProductsPage";
 
 
export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/signup", element: <SignupPage /> }
        ]
    },
    //Seller Routes
    {
        path: "/seller",
        element: (
            <ProtectedRoute>
                <RoleBasedRoute role="seller">
                    <SellerLayout />
                </RoleBasedRoute>   
            </ProtectedRoute>
        ),
        children: [
            { path: "products", element: <SellerProductsPage /> }
        ]
    },
    //Admin Routes
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <RoleBasedRoute role="admin">
                    <AdminLayout />
                </RoleBasedRoute>   
            </ProtectedRoute>
        ),
        children: [
            { path: "users", element: <UsersPage /> },
        ]
    }
]);
