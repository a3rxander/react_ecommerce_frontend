import {Outlet} from "react-router";

export default function SellerLayout() {
    return (
        <div>
            <header>
                <h1>Seller Dashboard</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2024 My E-commerce Seller</p>
            </footer>
        </div>
    );
}   