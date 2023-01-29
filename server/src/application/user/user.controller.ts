import { Request, Response } from "express";

//services
import { userService } from "./user.service";

const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.body.id);

  return res.status(200).send(user);
};

export const userConstroller = {
  getUserById,
};
