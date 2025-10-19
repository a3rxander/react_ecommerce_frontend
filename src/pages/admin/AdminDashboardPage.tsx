import { Link } from "react-router-dom";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Panel de administración</h1>
                <p className="text-muted-foreground">
                    Gestiona usuarios, categorías y contenido clave de la tienda.
                </p>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Usuarios</CardTitle>
                        <CardDescription>
                            Crea nuevos administradores, edita información y controla accesos.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>
                            Revisa la lista de usuarios actuales o agrega miembros al equipo con los
                            permisos adecuados.
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                        <Link to="users" className={buttonVariants({ variant: "default" })}>
                            Ver usuarios
                        </Link>
                        <Link
                            to="users/create"
                            className={cn(buttonVariants({ variant: "outline" }))}
                        >
                            Crear usuario
                        </Link>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Categorías</CardTitle>
                        <CardDescription>
                            Organiza el catálogo y mantiene actualizadas las colecciones.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>
                            Añade nuevas categorías, actualiza sus detalles o elimina las que ya no se
                            utilizan en la tienda.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link to="categories" className={buttonVariants({ variant: "default" })}>
                            Gestionar categorías
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
