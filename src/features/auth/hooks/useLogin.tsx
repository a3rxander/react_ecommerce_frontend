import { useState } from "react";
import { authService } from "../services/authService";
import type { LoginCredentials } from "../types/AuthTypes";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const loginAuth = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await authService.login(credentials);
      // Aquí podrías guardar token o user en el AuthContext
      console.debug("Login success:", response);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loginAuth };
}
