import { authController } from "../application/auth/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const authRoutes = (app: any) => {
  app.post("/signup", authController.signUp);
  app.post("/login", authController.login);
  app.post("/logout", authMiddleware.verifyToken, authController.logout);
};

export default authRoutes;
