import { Request, Response,NextFunction  } from "express";
import { userConstroller } from "../application/user/user.controller";

const userRoutes = (app: any) => {
    app.use((req: Request, res: Response, next: NextFunction ) => {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });
    app.post("/create", userConstroller.createUser)
    app.get("/user/:id", userConstroller.getUserById)
}

export default userRoutes;