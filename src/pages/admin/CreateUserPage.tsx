import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function CreateUserPage() {
    return (
        <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">Crear usuario</h1>
                <p className="text-muted-foreground">
                    Completa la información del nuevo usuario administrador o miembro del equipo.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Información principal</CardTitle>
                    <CardDescription>
                        Todos los campos son obligatorios para activar el acceso del usuario.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">Nombre</Label>
                            <Input id="firstName" placeholder="María" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Apellido</Label>
                            <Input id="lastName" placeholder="García" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="maria@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña temporal</Label>
                        <Input id="password" type="password" placeholder="********" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Rol</Label>
                        <Input id="role" placeholder="Admin / Editor" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar usuario</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
