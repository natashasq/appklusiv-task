import { UserRepository } from "../../repositories/user.repository";

const userRepository = new UserRepository();

const getUserByEmail = (email: string) => {
  return userRepository.getUserByEmail(email);
};

const getUserById = (id: string) => {
  return userRepository.getUserById(id);
};

export const userService = {
  getUserByEmail,
  getUserById,
};
