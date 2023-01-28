import {
  useState,
  ReactNode,
  createContext,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

//routes
import { appRoutes, APP_ROUTES } from "../types/constants/routes";

//types
import { TLoginPayload, TSignupPayload } from "../service/auth.service";

//services
import { userService } from "../service/user.service.";
import { authService } from "../service/auth.service";

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
  signup: signupCallback;
  login: loginCallback;
  logout: logoutCallback;
};

type signupCallback = (signupPayload: TSignupPayload) => void;
type loginCallback = (loginPayload: TLoginPayload) => void;
type logoutCallback = () => void;

const AuthStateContext = createContext<AuthStateContextProps>({
  isAuthenticated: false,
  user: null,
  loading: true,
});

const AuthActionsContext = createContext<AuthActionsContextProps>({
  signup: () => {},
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

  const signup = async (signupPayload: TSignupPayload) => {
    try {
      await authService.signup(signupPayload);
      navigate(appRoutes[APP_ROUTES.LOGIN]);
      setLoading(false);
    } catch (e) {
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

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
      <AuthActionsContext.Provider value={{ signup, login, logout }}>
        {children}
      </AuthActionsContext.Provider>
    </AuthStateContext.Provider>
  );
}
