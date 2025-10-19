
 import { createContext , useEffect, useState} from "react";

 import { authService } from "@/features/auth/services/authService";

 interface Credentials {
   username: string;
   password: string;
 }

 type AuthTypeState = 'authenticated' | 'unauthenticated' | 'loading';

 interface User {
   id: string;
   username: string;
   firstName: string;
   lastName: string;
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

  const [authState, setAuthState] = useState<AuthTypeState>('loading');
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (credentials: Credentials) => {
    setAuthState('loading');
    await authService.login(credentials)
      .then((data) => {
        setAuthState('authenticated');
        setUser(data.user);
        setToken(data.token);
        authService.setToken(data.token);
      })
      .catch((error) => {
        setAuthState('unauthenticated');
        console.error("Login error:", error);
      });
  };

  const logout = async () => {
    console.debug("Logging out user");
    await authService.logout()
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
    const checkAuth = async () => { 
      setAuthState("loading");
      console.debug("set loading checkAuth");
      const token = authService.getToken();
      console.debug("Found token on init:", token);
      if (token) {
        setAuthState("loading");
        await authService.checkAuth()
          .then((data) => {
            console.debug("User data from checkAuth:", data);
            setAuthState("authenticated");
            setUser(data);
            setToken(token);
          })
          .catch((error) => {
            setAuthState("unauthenticated");
            console.error("Check auth error:", error);
          });
      }
    };
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ authState, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};