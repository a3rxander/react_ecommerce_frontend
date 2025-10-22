// CategoriesPage.tsx
import { useEffect, useState } from "react";
import type { Category, CategoryFormData } from "@/features/categories/types/CategoryTypes";
import { categoryService } from "@/features/categories/services/categoryService";
import { CategoryCreateForm } from "@/features/categories/components/CategoryCreateForm";
import { CategoryList } from "@/features/categories/components/CategoryList";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  const a_fetchCategories = async () => {
    const data = await categoryService.getCategories();
    setCategories(data);
  };

  const a_createCategory = async (formData: CategoryFormData) => {
    const newCategory = await categoryService.createCategory(formData);
    setCategories((prev) => [...prev, newCategory]);
  };

  const a_updateCategory = async (id: string, formData: CategoryFormData) => {
    const updated = await categoryService.updateCategory(id, formData);
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? updated : c))
    );
  };

  const a_deleteCategory = async (id: string) => {
    await categoryService.deleteCategory(id);
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    a_fetchCategories();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Categorías</h1>
      <p className="text-muted-foreground">
        Gestiona la estructura del catálogo con acciones rápidas para crear, editar o eliminar categorías.
      </p>

      <div className="grid gap-6 lg:grid-cols-[2fr_3fr]">
        <CategoryCreateForm onCreate={a_createCategory} />
        <CategoryList
          categories={categories}
          onDelete={a_deleteCategory}
          onUpdate={a_updateCategory}
        />
      </div>
    </div>
  );
}
