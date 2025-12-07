import { apiLogin } from "@/lib/api/apiLogin";
import { apiJWT } from "@/lib/api/apiJWT";
import type { LoginCredentials, SignupData } from "../types/AuthTypes";

class AuthService {
  async login(payload: LoginCredentials) {
    try {
      const response = await apiLogin.post("/Auth/login", payload);
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
      const response = await apiJWT.get("/Auth/me");
      return response.data;
    } catch (error) {
      console.error("Check auth error:", error);
      throw error;
    }
  }

  async singnup(payload: SignupData) {
    try {
      const response = await apiLogin.post("/Auth/register", payload);
      return response.data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } 
  }
 
  getToken() {
    return localStorage.getItem("authToken");
  }

  setToken(token: string) {
    localStorage.setItem("authToken", token);
  }
}

export const authService = new AuthService();
