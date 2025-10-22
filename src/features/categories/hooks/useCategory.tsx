import { useState } from "react";
import type { Category, CategoryFormData } from "../types/CategoryTypes";
import { categoryService } from "../services/categoryService";



export const useCategory = (() => {
    const [categories, setCategories] = useState<Category[]>([]);

    const a_fetchCategories = async () => {
        try {
            const data = await categoryService.getCategories();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const a_createCategory = async (formData: CategoryFormData) => {
        try {
            const newCategory = await categoryService.createCategory(formData);
            setCategories((prevCategories) => [...prevCategories, newCategory]);
        } catch (error) {
            console.error("Error creating category:", error);
        }
    };

    const a_updateCategory = async (id: string, formData: CategoryFormData) => {
        try {
            const updatedCategory = await categoryService.updateCategory(id, formData);
            setCategories((prevCategories) =>
                prevCategories.map((category) =>
                    category.id === id ? updatedCategory : category
                )
            );
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    const a_deleteCategory = async (id: string) => {
        try {
            await categoryService.deleteCategory(id);
            setCategories((prevCategories) =>
                prevCategories.filter((category) => category.id !== id)
            );
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };  

    return {
        categories,
        a_fetchCategories,
        a_createCategory,
        a_updateCategory,
        a_deleteCategory
    };  
});