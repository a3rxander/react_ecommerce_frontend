import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const gallery = [
  {
    id: "img-01",
    label: "Portada",
    ratio: "1:1",
    size: "1.8 MB",
    status: "Principal",
  },
  {
    id: "img-02",
    label: "Detalle tejido",
    ratio: "4:5",
    size: "950 KB",
    status: "Aprobada",
  },
  {
    id: "img-03",
    label: "Empaque",
    ratio: "16:9",
    size: "1.1 MB",
    status: "Revisar",
  },
  {
    id: "img-04",
    label: "Lifestyle",
    ratio: "3:4",
    size: "2.4 MB",
    status: "Pendiente",
  },
]

export default function SellerProductImagesPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Gestor de imágenes</h1>
          <p className="text-muted-foreground">
            Diseña la experiencia de subida, orden y aprobación de assets visuales para cada producto.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">Ver guía de estilo</Button>
          <Button>Subir nuevas imágenes</Button>
        </div>
      </header>

      <Card className="border-dashed">
        <CardHeader>
          <CardTitle>Zona de carga</CardTitle>
          <CardDescription>Arrastra y suelta archivos o selecciona desde tu dispositivo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted-foreground/40 bg-muted/40 px-6 py-14 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed">
              <span className="text-3xl">⬆️</span>
            </div>
            <div className="space-y-1">
              <p className="text-lg font-medium">Suelta tus archivos aquí</p>
              <p className="text-muted-foreground text-sm">
                Recomendado: JPG o PNG de hasta 5MB, mínimo 1200px en su lado más largo.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="outline">Seleccionar archivos</Button>
              <Button variant="ghost">Pegar desde portapapeles</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap justify-between gap-4 text-sm text-muted-foreground">
          <span>Compatibles con fondos transparentes y metadatos EXIF.</span>
          <span>Máximo 10 archivos por carga simultánea.</span>
        </CardFooter>
      </Card>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Galería del producto</CardTitle>
            <CardDescription>Organiza el orden de aparición y marca la imagen destacada.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {gallery.map((image) => (
                <div key={image.id} className="group rounded-lg border bg-background/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-t-lg bg-muted">
                    <span className="text-muted-foreground text-sm">{image.label}</span>
                    <Badge className="absolute right-3 top-3" variant="secondary">
                      {image.status}
                    </Badge>
                  </div>
                  <div className="space-y-3 p-4 text-sm">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{image.ratio}</p>
                      <span className="text-muted-foreground">{image.size}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Reemplazar
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1">
                        Mover
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-muted/30">
          <CardHeader>
            <CardTitle>Recomendaciones visuales</CardTitle>
            <CardDescription>Define pautas claras para garantizar consistencia.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-medium">Fondos neutros</h3>
              <p className="text-muted-foreground">Prioriza fondos claros para resaltar el producto.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Detalles y contexto</h3>
              <p className="text-muted-foreground">
                Mezcla fotos de detalle con imágenes lifestyle para mostrar uso real.
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Formato cuadrado</h3>
              <p className="text-muted-foreground">Utiliza relación 1:1 para la portada y asegura nitidez en miniaturas.</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <Button variant="outline">Descargar plantillas</Button>
            <Button variant="secondary">Ver checklist</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}
