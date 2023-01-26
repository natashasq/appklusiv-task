import { Request, Response } from "express";
import { userService } from "./user.service";

import { IUser } from "../../models/user.model";
import { CreateUserDTO } from "./dtos/req/create-user.dto";
import { validate } from "class-validator";
/**
 * Returns list of up to 5 mentors that match parameters
 * @param payload - Recommended mentors search parameters
 * @returns List of up to 5 mentors
 */

const createUser = async (req: Request, res: Response) => {

  //validation
  const newUserDTO = new CreateUserDTO();
  newUserDTO.firstName = req.body.first_name;
  newUserDTO.lastName = req.body.last_name;
  newUserDTO.email = req.body.email;
  newUserDTO.password = req.body.password;

  const errors = await validate(newUserDTO);
  if (errors.length) {
    return res.status(400).send(errors)
  }

  const userProfile: IUser | null = await userService.getUserByEmail(
    req.body.email
  );
  if (userProfile) {
    return res.status(400).send("The user with this email already exists.");
  }

  const newUser: IUser = await userService.createUser(req.body);
  return res.status(200).send({
    message: "Profile successfully created",
    user: newUser,
  });
};

const getUserById = async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  return res.status(200).send(user);
};

export const userConstroller = {
  createUser,
  getUserById,
};
