import { UserRepository } from "../../repositories/user.repository";
import { CreateUserPayload } from "./contracts/user.contracts";

const userRepository = new UserRepository()


  const createUser = (data: CreateUserPayload): any => {
    return userRepository.createUser(data);
  }

  const getUserByEmail = (email: string) => {
    return userRepository.getUserByEmail(email)
  }

  const getUserById = (id: string) => {
   return userRepository.getUserById(id)
  }

  export const userService = {
    createUser,
    getUserByEmail,
    getUserById
  }