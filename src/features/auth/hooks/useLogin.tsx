import { useState } from "react";
import { useAuth } from "../context/useAuth";
import type { LoginCredentials } from "../types/AuthTypes";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const loginAuth = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const response = await login(credentials);
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
