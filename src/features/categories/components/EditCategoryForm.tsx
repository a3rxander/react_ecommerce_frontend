import { useState, useEffect, use } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { Category , CategoryFormData} from "../types/CategoryTypes";  


export const EditCategoryForm = ({ keyId, category , onUpdate, onDelete} :{
    category: Category;
    onUpdate: (id: string , data: CategoryFormData) => Promise<void>;
    onDelete: (id: string) => Promise<void>;
}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<CategoryFormData>({
        name: category.name,
        description: category.description
    });

    const toggleEdit = () => {
        if (isEditing) {
            setFormData({
                name: category.name,
                description: category.description
            });
        }
        setIsEditing(!isEditing); 
    }

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        await onUpdate(category.id, formData);
        setIsEditing(false);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

    useEffect(() => {
        setFormData({
            name: category.name,
            description: category.description
        });
    }, [category]);
    return (
        <div  className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
            {isEditing ? ( 
                <form onSubmit={handleUpdate}>
                    <div className="mb-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" value={formData.name} className="mb-2" onChange={handleInputChange} />
                        <Label htmlFor="description">Descripción</Label>
                        <Input id="description" value={formData.description} className="mb-2" onChange={handleInputChange} />
                    </div>   
                </form>
            ) : (
              <div>
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            )}
              <Badge variant="secondary">{category.id}</Badge>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-wrap gap-2">
              <Button onClick={toggleEdit} size="sm" variant="outline">
                {isEditing ? "Olvidar" : "Editar"}
              </Button>
                {isEditing && (
                    <Button size="sm" onClick={handleUpdate}>
                        Guardar
                    </Button>
                )}
              <Button size="sm" variant="destructive" onClick={() => onDelete(category.id)}>
                Eliminar
              </Button>
            </div>
        </div>
    );

}