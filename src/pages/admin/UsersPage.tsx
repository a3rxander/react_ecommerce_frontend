import { Link } from "react-router-dom";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const users = [
    { id: "usr-001", name: "María García", email: "maria@example.com", role: "Admin" },
    { id: "usr-002", name: "Carlos Pérez", email: "carlos@example.com", role: "Editor" },
    { id: "usr-003", name: "Lucía Fernández", email: "lucia@example.com", role: "Soporte" }
];

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">Usuarios</h1>
                    <p className="text-muted-foreground">
                        Controla los miembros del equipo y revisa sus roles activos dentro del panel.
                    </p>
                </div>
                <Link
                    to="/admin/users/create"
                    className={cn(buttonVariants({ variant: "default" }))}
                >
                    Crear usuario
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Miembros del equipo</CardTitle>
                    <CardDescription>
                        Lista de usuarios con acceso al panel de administración.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {users.map((user) => (
                        <div key={user.id} className="rounded-lg border p-4">
                            <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-medium">{user.name}</h3>
                                    <p className="text-sm text-muted-foreground">{user.email}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary">{user.role}</Badge>
                                    <Badge variant="outline">{user.id}</Badge>
                                </div>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex flex-wrap gap-2">
                                <Button size="sm" variant="outline">
                                    Editar
                                </Button>
                                <Button size="sm" variant="destructive">
                                    Desactivar
                                </Button>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
