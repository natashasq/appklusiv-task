import { CreateUserPayload } from "../application/user/contracts/user.contracts";
import { User } from "../models/user.model";

export class UserRepository {
  constructor() {}

  createUser(data: CreateUserPayload) {
    return User.create(data);
  }

  async getUserByEmail(email: string) {
    const user = await User.findOne({ email });
    return user;
  }

  async getUserById(id: string) {
    const user = await User.findById(id);
    return user;
  }
}
