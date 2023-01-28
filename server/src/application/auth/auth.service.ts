import { UserRepository } from "../../repositories/user.repository";
import { CreateUserPayload } from "../user/contracts/user.contracts";

const userRepository = new UserRepository();

const createUser = (data: CreateUserPayload): any =>
  userRepository.createUser(data);

export const authService = {
  createUser,
};
