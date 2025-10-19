import { Link, Outlet } from "react-router-dom";

import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminLayout() {
    return (
        <div className="min-h-screen bg-muted/20">
            <header className="border-b bg-background">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight">Ecommerce Admin</h1>
                        <p className="text-sm text-muted-foreground">
                            Herramientas para gestionar tu tienda en línea.
                        </p>
                    </div>
                    <nav className="flex items-center gap-2">
                        <Link
                            to="/admin"
                            className={cn(buttonVariants({ variant: "ghost" }), "px-3")}
                        >
                            Inicio
                        </Link>
                        <Link
                            to="/admin/users"
                            className={cn(buttonVariants({ variant: "ghost" }), "px-3")}
                        >
                            Usuarios
                        </Link>
                        <Link
                            to="/admin/categories"
                            className={cn(buttonVariants({ variant: "ghost" }), "px-3")}
                        >
                            Categorías
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="mx-auto max-w-6xl px-6 py-10">
                <Outlet />
            </main>
            <Separator />
            <footer className="bg-background py-6">
                <div className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Ecommerce Admin. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
}
