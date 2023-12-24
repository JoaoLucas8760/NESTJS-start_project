import { CreateUserDTO } from '../dtos/CreateUser.dto';
import { UserCreatedDTO } from '../dtos/UserCreated.dto';
import { UsernameAndEmail } from '../dtos/UsernameAndEmail.dto';

export abstract class IUserRepository {
  abstract findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDTO | null>;

  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO | null>;

  abstract findById(id: string): Promise<UserCreatedDTO | null>;
}
