import { createBrowserRouter  } from "react-router";
import RootLayout from "@/app/layout/RootLayout";
import AdminLayout from "@/app/layout/AdminLayout";
import SellerLayout from "@/app/layout/SellerLayout";

import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

import LoginPage from "@/pages/shared/LoginPage";
import SignupPage from "@/pages/shared/SignupPage";
import HomePage from "@/pages/shared/HomePage";

//Admin Pages
import UsersPage from "@/pages/admin/UsersPage";
import AdminDashboardPage from "@/pages/admin/AdminDashboardPage";
import CreateUserPage from "@/pages/admin/CreateUserPage";
import CategoriesPage from "@/pages/admin/CategoriesPage";

//Seller Pages
import SellerProductsPage from "@/pages/seller/SellerProductsPage";
import SellerProductEditorPage from "@/pages/seller/SellerProductEditorPage";
import SellerProductImagesPage from "@/pages/seller/SellerProductImagesPage";
import SellerDashboardPage from "@/pages/seller/SellerDashboardPage";


export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/signup", element: <SignupPage /> },
            { path: "/", element: <HomePage /> }
        ]
    },
    //Seller Routes
    {
        path: "/seller",
        element: (
            <ProtectedRoute>
                <RoleBasedRoute role="Seller">
                    <SellerLayout />
                </RoleBasedRoute>
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <SellerDashboardPage /> },
            { path: "products", element: <SellerProductsPage /> },
            { path: "products/:productId/edit", element: <SellerProductEditorPage /> },
            { path: "products/:productId/images", element: <SellerProductImagesPage /> }
        ]
    },
    //Admin Routes
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <RoleBasedRoute role="Admin">
                    <AdminLayout />
                </RoleBasedRoute>
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <AdminDashboardPage /> },
            { path: "users", element: <UsersPage /> },
            { path: "users/create", element: <CreateUserPage /> },
            { path: "categories", element: <CategoriesPage /> }
        ]
    }
]);
