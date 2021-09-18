import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userCheck = this.usersRepository.findById(user_id);

    if (!userCheck.id) {
      throw new Error("user dont exist");
    }
    if (!userCheck.admin) {
      throw new Error("User dont is admin");
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
