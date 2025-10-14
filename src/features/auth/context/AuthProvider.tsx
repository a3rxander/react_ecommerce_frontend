import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { authService } from "../services/authService";
import type {
  AuthContextValue,
  AuthResponse,
  LoginCredentials,
} from "../types/AuthTypes";
import { apiJWT } from "@/lib/api/apiJWT";
import { AuthContext } from "./AuthContext";

const getInitialToken = () => {
  if (typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem("token");
};

const getInitialUser = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedUser = localStorage.getItem("user");
    return storedUser ? (JSON.parse(storedUser) as Record<string, unknown>) : null;
  } catch (error) {
    console.warn("Failed to parse stored user", error);
    return null;
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(getInitialToken);
  const [user, setUser] = useState<Record<string, unknown> | null>(getInitialUser);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (token) {
      localStorage.setItem("token", token);
      apiJWT.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      localStorage.removeItem("token");
      delete apiJWT.defaults.headers.common.Authorization;
    }
  }, [token]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<AuthResponse> => {
      const response = await authService.login(credentials);
      setToken(response.token);
      setUser(response.user ?? null);
      return response;
    },
    [],
  );

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      token,
      user,
      isAuthenticated: Boolean(token),
      login,
      logout,
    }),
    [login, logout, token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
