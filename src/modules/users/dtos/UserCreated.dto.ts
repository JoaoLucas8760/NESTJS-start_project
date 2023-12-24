import { CreateUserDTO } from './CreateUser.dto';

export type UserCreatedDTO = {
  id: string;
  createdAt: Date;
} & CreateUserDTO;
