import {
  useState,
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import { authService, TLoginPayload } from "../service/auth.service";
import { useNavigate } from "react-router-dom";
import { appRoutes, APP_ROUTES } from "../types/constants/routes";
import { userService } from "../service/user.service.";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthStateContextProps = {
  isAuthenticated: TIsAuthenticated;
  user: TUser | null;
  loading: TLoading;
};

type TIsAuthenticated = boolean;
type TLoading = boolean;

type TUser = {
  firstName: string;
  lastName: string;
};

type AuthActionsContextProps = {
  login: loginCallback;
  logout: logoutCallback;
};

type loginCallback = (loginPayload: TLoginPayload) => void;
type logoutCallback = () => void;

const AuthStateContext = createContext<AuthStateContextProps>({
  isAuthenticated: false,
  user: null,
  loading: true,
});

const AuthActionsContext = createContext<AuthActionsContextProps>({
  login: () => {},
  logout: () => {},
});

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthActions = () => useContext(AuthActionsContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState<TLoading>(true);
  const [isAuthenticated, setIsAuthenticated] =
    useState<TIsAuthenticated>(false);
  const [user, setUser] = useState<TUser | null>(null);
  const navigate = useNavigate();

  const login = async (loginPayload: TLoginPayload) => {
    try {
      await authService.login(loginPayload);
      setIsAuthenticated(true);
      navigate(appRoutes[APP_ROUTES.HOME]);
      setLoading(false);
    } catch (e) {
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setIsAuthenticated(false);
      setLoading(false);
      navigate(appRoutes[APP_ROUTES.SIGNUP]);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const userData = await userService.getUser();
        console.log(userData, "userData");
        setUser(userData);
        setIsAuthenticated(true);
        navigate(appRoutes[APP_ROUTES.HOME]);
        setLoading(false);
      } catch (e) {
        setUser(null);
        setIsAuthenticated(false);
        setLoading(false);
      }
    })();
  }, [navigate]);

  return (
    <AuthStateContext.Provider value={{ isAuthenticated, user, loading }}>
      <AuthActionsContext.Provider value={{ login, logout }}>
        {children}
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
}
