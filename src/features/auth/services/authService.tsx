import { apiLogin } from "@/lib/api/apiLogin";
import type { AuthResponse, LoginCredentials } from "../types/AuthTypes";

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await apiLogin.post("/Auth/login", credentials);
      return response.data as AuthResponse;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
}

export const authService = new AuthService();
