import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { CategoryFormData } from "../types/CategoryTypes";

export const CategoryCreateForm = ({ onCreate }: { onCreate: (data: CategoryFormData) => Promise<void> }) => {
  const [formData, setFormData] = useState<CategoryFormData>({
    name: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onCreate(formData);
    setFormData({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Crear nueva categoría</CardTitle>
          <CardDescription>Define el nombre y la descripción.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Input id="description" value={formData.description} onChange={handleInputChange} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-3">
          <Button variant="outline" type="reset">Limpiar</Button>
          <Button type="submit">Guardar</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
