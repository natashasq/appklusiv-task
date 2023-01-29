import { Express } from "express";

//controllers
import { userConstroller } from "../application/user/user.controller";

//middlewares
import { authMiddleware } from "../middleware/auth.middleware";

const userRoutes = (app: Express) => {
  app.get("/user", authMiddleware.verifyToken, userConstroller.getUserById);
};

export default userRoutes;
