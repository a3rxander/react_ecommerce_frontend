// CategoriesPage.tsx
import { useEffect, useState } from "react"; 
import { CategoryCreateForm } from "@/features/categories/components/CategoryCreateForm";
import { CategoryList } from "@/features/categories/components/CategoryList";
import { useCategory } from "@/features/categories/hooks/useCategory";

export default function CategoriesPage() { 

const {  categories,
        a_fetchCategories,
        a_createCategory,
        a_updateCategory,
        a_deleteCategory} = useCategory(); 

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
