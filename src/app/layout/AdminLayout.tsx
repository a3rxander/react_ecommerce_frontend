import { Outlet } from "react-router";

export default function AdminLayout() {
    return (
        <div>
            <header>    
                <h1>Admin Dashboard</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2024 My E-commerce Admin</p>
            </footer>
        </div>
    );
}