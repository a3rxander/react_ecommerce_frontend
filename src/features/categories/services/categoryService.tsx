import { apiJWT } from "@/lib/api/apiJWT";

import type { CategoryFormData } from "../types/CategoryTypes";

class CategoryService {
    async getCategories() {
        try {
            const response = await apiJWT.get("/v1/Categories");
            return response.data;
        } catch (error) {
            console.error("Get all categories error:", error);
            throw error;
        }
    }

    async createCategory( categoryData:CategoryFormData) {
        try {
            const response = await apiJWT.post("/v1/Categories", categoryData);
            return response.data;
        } catch (error) {
            console.error("Create category error:", error);
            throw error;
        }
    }

    async updateCategory(categoryId: string, categoryData: CategoryFormData) {
        try {
            const response = await apiJWT.put(`/v1/Categories/${categoryId}`, categoryData);
            return response.data;
        } catch (error) {
            console.error("Update category error:", error);
            throw error;
        }
    }
    async deleteCategory(categoryId: string) {
        try {
            const response = await apiJWT.delete(`/v1/Categories/${categoryId}`);
            return response.data;
        } catch (error) {
            console.error("Delete category error:", error);
            throw error;
        }
    }
}


export const categoryService = new CategoryService();