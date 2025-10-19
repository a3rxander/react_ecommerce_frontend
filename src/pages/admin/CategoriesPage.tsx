import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const categories = [
    { id: "cat-001", name: "Electrónica", description: "Teléfonos, audio y gadgets" },
    { id: "cat-002", name: "Moda", description: "Ropa y accesorios para todas las temporadas" },
    { id: "cat-003", name: "Hogar", description: "Decoración, muebles y artículos esenciales" }
];

export default function CategoriesPage() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">Categorías</h1>
                <p className="text-muted-foreground">
                    Gestiona la estructura del catálogo con acciones rápidas para crear, editar o eliminar categorías.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
                <Card>
                    <CardHeader>
                        <CardTitle>Crear nueva categoría</CardTitle>
                        <CardDescription>
                            Define el nombre y la descripción para mostrarla en la tienda.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="categoryName">Nombre</Label>
                            <Input id="categoryName" placeholder="Accesorios" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="categoryDescription">Descripción</Label>
                            <Input id="categoryDescription" placeholder="Detalles que verán los clientes" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-3">
                        <Button variant="outline">Limpiar</Button>
                        <Button>Guardar categoría</Button>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Listado de categorías</CardTitle>
                        <CardDescription>
                            Visualiza las categorías existentes y gestiona acciones rápidas.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {categories.map((category) => (
                            <div key={category.id} className="rounded-lg border p-4">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-lg font-medium">{category.name}</h3>
                                        <p className="text-sm text-muted-foreground">{category.description}</p>
                                    </div>
                                    <Badge variant="secondary">{category.id}</Badge>
                                </div>
                                <Separator className="my-4" />
                                <div className="flex flex-wrap gap-2">
                                    <Button size="sm" variant="outline">
                                        Editar
                                    </Button>
                                    <Button size="sm" variant="destructive">
                                        Eliminar
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
