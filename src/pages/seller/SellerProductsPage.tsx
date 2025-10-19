import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const products = [
  {
    id: "SKU-001",
    name: "Camiseta básica algodón orgánico",
    category: "Ropa",
    stock: 42,
    price: "$22.50",
    status: "Publicado",
    badgeVariant: "default" as const,
    updatedAt: "Hace 2 horas",
  },
  {
    id: "SKU-132",
    name: "Zapatillas running Pro-Light",
    category: "Calzado",
    stock: 8,
    price: "$120.00",
    status: "Borrador",
    badgeVariant: "secondary" as const,
    updatedAt: "Ayer",
  },
  {
    id: "SKU-210",
    name: "Mochila urbana impermeable",
    category: "Accesorios",
    stock: 0,
    price: "$68.90",
    status: "Sin stock",
    badgeVariant: "outline" as const,
    updatedAt: "Hace 5 días",
  },
]

const highlights = [
  {
    title: "Productos activos",
    value: "128",
    trend: "+12% vs. mes anterior",
  },
  {
    title: "Inventario bajo",
    value: "14",
    trend: "Revisa antes del fin de semana",
  },
  {
    title: "Valor promedio",
    value: "$47.80",
    trend: "Incluye impuestos",
  },
]

export default function SellerProductsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Catálogo de productos</h1>
          <p className="text-muted-foreground">
            Administra el inventario, los precios y el estado de publicación desde una sola vista.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">Importar catálogo</Button>
          <Button>Nuevo producto</Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="border-dashed">
            <CardHeader className="pb-2">
              <CardDescription>{item.title}</CardDescription>
              <CardTitle className="text-3xl font-bold">{item.value}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-sm text-muted-foreground">{item.trend}</CardContent>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <CardTitle className="text-2xl">Productos recientes</CardTitle>
            <CardDescription>Revisa el estado actual de tu catálogo y realiza ajustes rápidos.</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">Exportar listado</Button>
            <Button variant="secondary">Ver solo borradores</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-12 items-center gap-4 border-b bg-muted/60 px-6 py-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <span className="col-span-3">Producto</span>
              <span className="col-span-2">Categoría</span>
              <span className="col-span-2 text-right">Stock</span>
              <span className="col-span-2 text-right">Precio</span>
              <span className="col-span-2">Estado</span>
              <span className="col-span-1 text-right">Actualizado</span>
            </div>
            <div className="divide-y">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-12 items-center gap-4 px-6 py-4 transition hover:bg-muted/50"
                >
                  <div className="col-span-3">
                    <div className="font-medium leading-tight">{product.name}</div>
                    <p className="text-muted-foreground text-sm">{product.id}</p>
                  </div>
                  <div className="col-span-2 text-sm">{product.category}</div>
                  <div className="col-span-2 text-right text-sm">
                    <span className={product.stock === 0 ? "font-semibold text-destructive" : ""}>
                      {product.stock} unidades
                    </span>
                  </div>
                  <div className="col-span-2 text-right text-sm font-medium">{product.price}</div>
                  <div className="col-span-2">
                    <Badge variant={product.badgeVariant}>{product.status}</Badge>
                  </div>
                  <div className="col-span-1 text-right text-xs text-muted-foreground">{product.updatedAt}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-dashed bg-muted/20">
        <CardHeader>
          <CardTitle className="text-xl">Sugerencias para optimizar tu catálogo</CardTitle>
          <CardDescription>
            Identifica mejoras rápidas basadas en el rendimiento y la presentación de tus productos.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background text-xs font-semibold">
              1
            </span>
            <p>
              Actualiza las fotos de los productos sin stock para mantener el interés de los clientes.
            </p>
          </div>
          <Separator />
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background text-xs font-semibold">
              2
            </span>
            <p>
              Agrupa los productos por colecciones temporales y ajusta los precios desde esta vista de manera masiva.
            </p>
          </div>
          <Separator />
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border bg-background text-xs font-semibold">
              3
            </span>
            <p>
              Utiliza etiquetas para marcar lanzamientos y prioriza la publicación de los artículos con mejor margen.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
