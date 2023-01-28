import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

//routes
import { appRoutes, APP_ROUTES } from "../../types/constants/routes";

//components
import PrivateRoute from "../../components/private-route/PrivateRoute";

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
      <Route path={appRoutes[APP_ROUTES.LOGIN]} element={<Login />} />
      <Route path={appRoutes[APP_ROUTES.SIGNUP]} element={<Signup />} />
    </Routes>
  );
}

export default AppRoutes;
