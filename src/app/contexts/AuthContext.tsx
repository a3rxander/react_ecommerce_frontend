import { ReactNode, createContext, useCallback, useMemo, useState } from "react";

export type AuthUser = {
  id: number;
  role: string;
  email: string;
  token?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<AuthUser>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const AUTH_USER_STORAGE_KEY = "auth:user";
const AUTH_TOKEN_STORAGE_KEY = "auth:token";

const restoreUserFromStorage = (): AuthUser | null => {
  if (typeof window === "undefined") return null;

  const storedUser = window.localStorage.getItem(AUTH_USER_STORAGE_KEY);
  if (!storedUser) return null;

  try {
    return JSON.parse(storedUser) as AuthUser;
  } catch (error) {
    console.warn("Failed to parse stored user", error);
    return null;
  }
};

const persistSession = (user: AuthUser | null) => {
  if (typeof window === "undefined") return;

  if (user) {
    window.localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(user));
    if (user.token) {
      window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, user.token);
    }
  } else {
    window.localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  }
};

const mockAuthenticate = async (email: string, password: string): Promise<AuthUser> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  if (email === "admin@test.com" && password === "1234") {
    return {
      id: 1,
      role: "admin",
      email,
      token: "mock-admin-token",
    } satisfies AuthUser;
  }

  if (email === "user@test.com" && password === "1234") {
    return {
      id: 2,
      role: "customer",
      email,
      token: "mock-user-token",
    } satisfies AuthUser;
  }

  throw new Error("Credenciales inválidas");
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(() => restoreUserFromStorage());

  const login = useCallback(async (email: string, password: string) => {
    const authenticatedUser = await mockAuthenticate(email, password);
    setUser(authenticatedUser);
    persistSession(authenticatedUser);
    return authenticatedUser;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    persistSession(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
