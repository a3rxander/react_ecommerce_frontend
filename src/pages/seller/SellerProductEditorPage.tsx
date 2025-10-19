import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function SellerProductEditorPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">Crear y actualizar productos</h1>
        <p className="text-muted-foreground">
          Diseña la experiencia de edición con formularios claros, secciones bien delimitadas y acciones destacadas.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Ficha principal</CardTitle>
          <CardDescription>Incluye la información esencial para publicar un producto en tu catálogo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <FieldSet>
            <FieldLegend>Información básica</FieldLegend>
            <div className="grid gap-6 lg:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="product-name">Nombre del producto</FieldLabel>
                <FieldContent>
                  <Input id="product-name" placeholder="Ej. Sneakers edición limitada" />
                  <FieldDescription>
                    Mantén el nombre descriptivo y atractivo para la búsqueda interna.
                  </FieldDescription>
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel htmlFor="product-sku">SKU interno</FieldLabel>
                <FieldContent>
                  <Input id="product-sku" placeholder="Ej. SNK-2024-LMT" />
                  <FieldDescription>Utiliza un identificador único por variante.</FieldDescription>
                </FieldContent>
              </Field>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="product-category">Categoría</FieldLabel>
                <FieldContent>
                  <Input id="product-category" placeholder="Selecciona una categoría" />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel htmlFor="product-price">Precio</FieldLabel>
                <FieldContent>
                  <Input id="product-price" placeholder="$" />
                  <FieldDescription>Incluye impuestos y costos logísticos.</FieldDescription>
                </FieldContent>
              </Field>
            </div>
          </FieldSet>

          <Separator />

          <FieldSet>
            <FieldLegend>Inventario y variantes</FieldLegend>
            <div className="grid gap-6 lg:grid-cols-3">
              <Field>
                <FieldLabel htmlFor="product-stock">Stock disponible</FieldLabel>
                <FieldContent>
                  <Input id="product-stock" placeholder="Ej. 25" />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel htmlFor="product-safety-stock">Stock de seguridad</FieldLabel>
                <FieldContent>
                  <Input id="product-safety-stock" placeholder="Ej. 5" />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel htmlFor="product-variation">Variantes</FieldLabel>
                <FieldContent>
                  <Input id="product-variation" placeholder="Ej. Tallas, colores" />
                  <FieldDescription>
                    Describe las opciones disponibles para guiar la creación de variantes.
                  </FieldDescription>
                </FieldContent>
              </Field>
            </div>
          </FieldSet>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button variant="secondary">Guardar borrador</Button>
          <Button>Publicar producto</Button>
        </CardFooter>
      </Card>

      <Card className="border-destructive/40">
        <CardHeader>
          <CardTitle>Eliminar producto</CardTitle>
          <CardDescription>
            Ofrece una confirmación clara antes de eliminar un producto del catálogo.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            Destaca las consecuencias de eliminar un producto y sugiere alternativas como desactivar la publicación o moverlo a un archivo.
          </p>
          <div className="rounded-md border border-destructive/60 bg-destructive/10 p-4 text-destructive">
            <p className="font-semibold">Esta acción es irreversible.</p>
            <p>El producto y sus variantes dejarán de estar disponibles en todos los canales.</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-end gap-2">
          <Button variant="outline">Mover a archivo</Button>
          <Button variant="destructive">Eliminar definitivamente</Button>
        </CardFooter>
      </Card>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Notas internas</CardTitle>
            <CardDescription>Facilita la colaboración dejando instrucciones o acuerdos comerciales.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              Reserva un espacio para comentarios del equipo de logística, marketing o atención al cliente.
            </p>
            <div className="rounded-md border bg-muted/40 p-4 text-foreground">
              <Label className="text-xs uppercase tracking-wide text-muted-foreground">Ejemplo</Label>
              <p className="mt-2">
                "Actualizar fotos con nuevo empaque antes del próximo lanzamiento."
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Historial de cambios</CardTitle>
            <CardDescription>Resume las últimas acciones para mantener trazabilidad en el equipo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">Actualización de precio</p>
                <p className="text-muted-foreground">Ajustado a $119.90 - hace 3 horas</p>
              </div>
              <Button size="sm" variant="ghost" className="h-8 px-3">
                Ver detalle
              </Button>
            </div>
            <Separator />
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">Nueva variante agregada</p>
                <p className="text-muted-foreground">Color "Oro metálico" - ayer</p>
              </div>
              <Button size="sm" variant="ghost" className="h-8 px-3">
                Restaurar
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
