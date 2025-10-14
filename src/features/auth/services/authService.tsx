import { apiLogin } from "@/lib/api/apiLogin";
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
}

export const authService = new AuthService();
