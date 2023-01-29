//models
import { User } from "../models/user.model";

//types
import { CreateUserPayload } from "../application/user/contracts/user.contracts";

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
    const user = await User.findById(id).select("first_name last_name -_id");
    return user;
  }
}
