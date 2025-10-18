import { apiLogin } from "@/lib/api/apiLogin";
import { apiJWT } from "@/lib/api/apiJWT";
import type { LoginCredentials } from "../types/AuthTypes";

class AuthService {
  async login(credentials: LoginCredentials) {
    try {
      const response = await apiLogin.post("/Auth/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
  
  async logout() {
    try {
      const response = await apiJWT.post("/Auth/logout");
      return response.data;
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    } 
  }

  async checkAuth() {
     try {
      const response = await apiJWT.get("/Auth/check-auth");
      return response.data;
    } catch (error) {
      console.error("Check auth error:", error);
      throw error;
    }
  }

  getToken() {
    return localStorage.getItem("authToken");
  }
}

export const authService = new AuthService();
