import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Category } from "../types/CategoryTypes";
import { EditCategoryForm } from "./EditCategoryForm";

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
          <EditCategoryForm 
            key={category.id}
            category={category}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </CardContent>
    </Card>
  );
};
