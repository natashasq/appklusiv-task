//routes
import AppRoutes from "./routes/app-routes/AppRoutes";

//contexts
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
