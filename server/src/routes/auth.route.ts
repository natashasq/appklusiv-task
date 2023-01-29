import { Express } from "express";
//controllers
import { authController } from "../application/auth/auth.controller";

//middlewares
import { authMiddleware } from "../middleware/auth.middleware";

const authRoutes = (app: Express) => {
  app.post("/signup", authController.signUp);
  app.post("/login", authController.login);
  app.post("/logout", authMiddleware.verifyToken, authController.logout);
};

export default authRoutes;
