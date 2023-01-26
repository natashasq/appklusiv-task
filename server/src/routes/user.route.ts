import { userConstroller } from "../application/user/user.controller";

const userRoutes = (app: any) => {
  app.get("/user/:id", userConstroller.getUserById);
};

export default userRoutes;
