import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

//routes
import { appRoutes, APP_ROUTES } from "../../types/constants/routes";

//contexts
import { useAuthState } from "../../contexts/AuthContext";

//components
import { Layout } from "../layout/Layout";

type PrivateRouteProps = {
  children: ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated, loading } = useAuthState();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Layout>{children}</Layout>;
  }

  return <Navigate to={appRoutes[APP_ROUTES.SIGNUP]} />;
}

export default PrivateRoute;
