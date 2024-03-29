import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { Request, Response } from "express";
import { validate } from "class-validator";
import jwt from "jsonwebtoken";

//model
import { IUser } from "../../models/user.model";

//DTO
import { CreateUserDTO } from "../user/dtos/req/create-user.dto";

//service
import { userService } from "../user/user.service";
import { authService } from "./auth.service";

//types
import { appMessages, APP_MESSAGES } from "../../types/messages.types";

const signUp = async (req: Request, res: Response) => {
  const newUserDTO = new CreateUserDTO();

  newUserDTO.first_name = req.body.first_name;
  newUserDTO.last_name = req.body.last_name;
  newUserDTO.email = req.body.email;
  newUserDTO.password = req.body.password;

  const errors = await validate(newUserDTO);

  if (errors.length) {
    return res.status(400).send(errors);
  }

  const userProfile: IUser | null = await userService.getUserByEmail(
    req.body.email
  );

  if (userProfile) {
    return res.status(400).send(appMessages[APP_MESSAGES.userExists]);
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(req.body.password, salt);
  newUserDTO.password = hashedPassword;

  const newUser: IUser = await authService.createUser(newUserDTO);

  return res.status(200).send({
    message: appMessages[APP_MESSAGES.profileCreated],
    user: newUser,
  });
};

const login = async (req: Request, res: Response) => {
  const user: IUser | null = await userService.getUserByEmail(req.body.email);

  if (!user) {
    return res.status(404).send(appMessages[APP_MESSAGES.notFound]);
  }

  const isPasswordValid = compareSync(req.body.password, user.password);

  if (!isPasswordValid) {
    return res.status(404).send(appMessages[APP_MESSAGES.invalidPassword]);
  }

  const token = jwt.sign({ id: user.id }, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: 86400,
  });

  return res
    .cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(200)
    .json({ message: appMessages[APP_MESSAGES.loggedIn] });
};

const logout = (req: Request, res: Response) =>
  res
    .clearCookie("access_token")
    .status(200)
    .json({ message: appMessages[APP_MESSAGES.loggedOut] });

export const authController = {
  signUp,
  login,
  logout,
};
