import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes/app-routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
