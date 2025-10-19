import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function SellerDashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-tight">Panel del Vendedor</h1>
                <p className="text-muted-foreground">
                    Administra tus productos, revisa pedidos recientes y controla tu catálogo.
                </p>
            </div>

            <Separator />

            <div className="grid gap-6 md:grid-cols-2">
                {/* Productos */}
                <Card>
                    <CardHeader>
                        <CardTitle>Productos</CardTitle>
                        <CardDescription>
                            Gestiona tus productos y mantén actualizado tu inventario.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>
                            Agrega nuevos productos, edita los existentes o revisa su disponibilidad.
                        </p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                        <Link to="products" className={buttonVariants({ variant: "default" })}>
                            Ver productos
                        </Link>
                        <Link
                            to="products/create"
                            className={cn(buttonVariants({ variant: "outline" }))}
                        >
                            Crear producto
                        </Link>
                    </CardFooter>
                </Card>

                {/* Órdenes */}
                <Card>
                    <CardHeader>
                        <CardTitle>Órdenes recientes</CardTitle>
                        <CardDescription>
                            Consulta el estado y detalles de las órdenes más recientes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>
                            Revisa las órdenes pendientes, completadas o en proceso para mantener
                            un control de tus ventas.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link to="orders" className={buttonVariants({ variant: "default" })}>
                            Ver órdenes
                        </Link>
                    </CardFooter>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Reportes */}
                <Card>
                    <CardHeader>
                        <CardTitle>Reportes de ventas</CardTitle>
                        <CardDescription>
                            Analiza tus ventas y el rendimiento de tus productos.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>
                            Visualiza las métricas clave de tus ventas para mejorar tus estrategias
                            y decisiones comerciales.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link to="reports" className={buttonVariants({ variant: "default" })}>
                            Ver reportes
                        </Link>
                    </CardFooter>
                </Card>

                {/* Configuración */}
                <Card>
                    <CardHeader>
                        <CardTitle>Configuración</CardTitle>
                        <CardDescription>
                            Ajusta tus datos de tienda, métodos de pago y preferencias.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                        <p>
                            Administra la información básica de tu tienda y personaliza la
                            experiencia de venta.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link to="settings" className={buttonVariants({ variant: "outline" })}>
                            Configurar tienda
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
