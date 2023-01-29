//repositories
import { UserRepository } from "../../repositories/user.repository";

//types
import { CreateUserPayload } from "../user/contracts/user.contracts";

const userRepository = new UserRepository();

const createUser = (data: CreateUserPayload) => userRepository.createUser(data);

export const authService = {
  createUser,
};
