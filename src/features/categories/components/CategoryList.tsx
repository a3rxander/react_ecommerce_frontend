import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Category } from "../types/CategoryTypes";

export const CategoryList = ({
  categories,
  onDelete,
  onUpdate,
}: {
  categories: Category[];
  onDelete: (id: string) => Promise<void>;
  onUpdate: (id: string, data: any) => Promise<void>;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Listado de categorías</CardTitle>
        <CardDescription>Visualiza y gestiona tus categorías.</CardDescription>
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
              <Button size="sm" variant="outline">Editar</Button>
              <Button size="sm" variant="destructive" onClick={() => onDelete(category.id)}>
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
