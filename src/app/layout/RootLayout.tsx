import { Outlet } from "react-router";

export default function RootLayout() {
    return (
        <div>
            <header>    
                <h1>My E-commerce Public Panel</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2024 My E-commerce</p>
            </footer>
        </div>  
    );
}