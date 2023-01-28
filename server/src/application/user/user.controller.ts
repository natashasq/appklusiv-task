import { Request, Response } from "express";
import { userService } from "./user.service";

/**
 * Returns list of up to 5 mentors that match parameters
 * @param payload - Recommended mentors search parameters
 * @returns List of up to 5 mentors
 */

const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.body.id);

  return res.status(200).send(user);
};

export const userConstroller = {
  getUserById,
};
