
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user?: Record<string, unknown> | null;
}

export interface AuthContextValue {
  token: string | null;
  user: Record<string, unknown> | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  logout: () => void;
}

