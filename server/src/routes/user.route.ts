import { userConstroller } from "../application/user/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRoutes = (app: any) => {
  app.get("/user", authMiddleware.verifyToken, userConstroller.getUserById);
};

export default userRoutes;
