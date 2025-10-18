
 import { createContext , useEffect, useState} from "react";

 import { authService } from "@/features/auth/services/authService";

 interface Credentials {
   username: string;
   password: string;
 }

 type AuthTypeState = 'authenticated' | 'unauthenticated' | 'loading';

 interface User {
   id: string;
   name: string;
   email: string;
   role: string;
 }

interface AuthContextProps {
   authState: AuthTypeState;
   user: User | null;
   token: string | null;
   login: (credentials: Credentials) => void;
   logout: () => void;
 }

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [authState, setAuthState] = useState<AuthTypeState>('unauthenticated');
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (credentials: Credentials) => {
    setAuthState('loading');
    authService.login(credentials)
      .then((data) => {
        setAuthState('authenticated');
        setUser(data.user);
        setToken(data.token);
      })
      .catch((error) => {
        setAuthState('unauthenticated');
        console.error("Login error:", error);
      });
  };

  const logout = () => {
    authService.logout()
      .then(() => {
        setAuthState('unauthenticated');
        setUser(null);
        setToken(null);
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  // al cargar la app, verificar si el usuario ya está autenticado con el jwt en storage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthState("loading");
      authService.checkAuth()
        .then((data) => {
          setAuthState("authenticated");
          setUser(data.user);
          setToken(token);
        })
        .catch((error) => {
          setAuthState("unauthenticated");
          console.error("Check auth error:", error);
        });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ authState, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};