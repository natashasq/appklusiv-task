import { UserRepository } from "../../repositories/user.repository";

const userRepository = new UserRepository();

const getUserByEmail = (email: string) => userRepository.getUserByEmail(email);

const getUserById = (id: string) => userRepository.getUserById(id);

export const userService = {
  getUserByEmail,
  getUserById,
};
