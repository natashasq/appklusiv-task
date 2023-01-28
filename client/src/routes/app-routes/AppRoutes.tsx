import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//routes
import { appRoutes, APP_ROUTES } from "../../types/constants/routes";

//components
import PrivateRoute from "../../components/private-route/PrivateRoute";
import { Layout } from "../../components/layout/Layout";

const Home = lazy(() => import("../home/Home"));
const Login = lazy(() => import("../login/Login"));
const Signup = lazy(() => import("../signup/Signup"));

function AppRoutes() {
  return (
    <Routes>
      <Route
        path={appRoutes[APP_ROUTES.HOME]}
        element={
          <PrivateRoute>
            <Suspense fallback={<>Loading</>}>
              <Home />
            </Suspense>
          </PrivateRoute>
        }
      />
      <Route
        path={appRoutes[APP_ROUTES.LOGIN]}
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path={appRoutes[APP_ROUTES.SIGNUP]}
        element={
          <Layout>
            <Signup />
          </Layout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
