import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { Request, Response } from "express";

import { validate } from "class-validator";
import { IUser } from "../../models/user.model";
import { CreateUserDTO } from "../user/dtos/req/create-user.dto";
import { userService } from "../user/user.service";
import { authService } from "./auth.service";
import jwt from "jsonwebtoken";

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
    return res.status(400).send("The user with this email already exists.");
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(req.body.password, salt);
  newUserDTO.password = hashedPassword;

  const newUser: IUser = await authService.createUser(newUserDTO);

  return res.status(200).send({
    message: "Profile successfully created",
    user: newUser,
  });
};

const login = async (req: Request, res: Response) => {
  const user: IUser | null = await userService.getUserByEmail(req.body.email);

  if (!user) {
    return res.status(404).send("User not found!");
  }

  const isPasswordValid = compareSync(req.body.password, user.password);

  if (!isPasswordValid) {
    return res.status(404).send("Invalid password");
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
    .json({ message: "Logged in successfully" });
};

const logout = (req: Request, res: Response) =>
  res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "Successfully logged out." });

export const authController = {
  signUp,
  login,
  logout,
};
