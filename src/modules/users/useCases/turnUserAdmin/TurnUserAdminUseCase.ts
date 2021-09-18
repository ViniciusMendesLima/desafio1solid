import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userTurnAdminRequest = this.usersRepository.findById(user_id);

    if (!userTurnAdminRequest) {
      throw new Error("User making request not found!");
    }

    const userTurnAdmin = this.usersRepository.turnAdmin(userTurnAdminRequest);

    return userTurnAdmin;
  }
}

export { TurnUserAdminUseCase };
